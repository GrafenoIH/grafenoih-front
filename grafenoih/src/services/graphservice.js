import api from './api.js';

const graphService = {
  getEdges() {
    return api.get('/edges');
  },

  getNodes() {
    return api.get('/nodes');
  },
};

export default graphService;
