import api from './api.js';

const graphService = {
  async getEdges() {
    return api.get('/edges');
  },

  async getEdgesStream() {
    const baseURL = api.defaults.baseURL || '';
    const response = await fetch(`${baseURL}/edges/stream`, {
      headers: api.defaults.headers.common
    });

    return processStream(response, (item) => ({
      from: item.source.id,
      to: item.target.id,
      ...item
    }));
  },

  async getNodes() {
    return api.get('/nodes');
  },

  async getNodesStream() {
    const baseURL = api.defaults.baseURL || '';
    const response = await fetch(`${baseURL}/nodestream`, {
      headers: api.defaults.headers.common
    });

    return processStream(response, (item) => ({
      id: item.id,
      label: item.name,
      ...item
    }));
  },

  async getNode(id) {
    return api.get('/nodes/' + id);
  },

  async search(string) {
    return api.get('/nodes/search/' + string);
  }
};

async function processStream(response, transformFn) {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  const items = [];

  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        if (line.trim()) {
          try {
            const item = JSON.parse(line);
            items.push(transformFn(item));
          } catch (e) {
            console.warn('Failed to parse line:', line, e);
          }
        }
      }
    }

    if (buffer.trim()) {
      try {
        const item = JSON.parse(buffer);
        items.push(transformFn(item));
      } catch (e) {
        console.warn('Failed to parse remaining buffer:', buffer, e);
      }
    }
  } finally {
    reader.releaseLock();
  }

  return items;
}

export default graphService;
