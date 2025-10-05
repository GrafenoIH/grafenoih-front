<template>
  <div id="mynetwork" ref="networkRef"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { DataSet, Network } from 'vis-network/standalone'
import graphService from '@/services/graphservice'

const networkRef = ref(null)

const emits = defineEmits(['hideSidebar', 'showSidebar'])

onMounted(async () => {
  const nodes = new DataSet([])
  const edges = new DataSet([])

  const options = {
    interaction: { hover: true },
    nodes: {
      shape: 'dot',
      size: 16,
      color: {
        background: '#2FFE85',
        border: '#2FFE85',
        highlight: { background: '#EDFDF1', border: '#EDFDF1' },
        hover: { background: '#5FFE99', border: '#5FFE99' },
      },
    },
    edges: {
      width: 2,
      color: {
        color: '#006B44',
        highlight: '#EDFDF1',
        hover: '#006B44',
      },
    },
    physics: {
      enabled: true,
      solver: 'repulsion',
      repulsion: {
        centralGravity: 0.1,
        springLength: 200,
        springConstant: 0.05,
        nodeDistance: 150,
        damping: 0.09,
      },
    },
  }

  const network = new Network(networkRef.value, { nodes, edges }, options)

  network.on('selectNode', (params) => {
    showSidebar(params.nodes[0])
  })

  network.on('deselectNode', () => {
    hideSidebar()
  })

  try {
    const [nodesData, edgesData] = await Promise.all([
      graphService.getNodesStream(),
      graphService.getEdgesStream(),
    ])

    nodes.add(nodesData)
    edges.add(edgesData)

    network.fit({
      animation: {
        duration: 1000,
        easingFunction: 'easeInOutQuad',
      },
    })
  } catch (error) {
    console.error('Failed to load graph data:', error)
  }
})

function showSidebar(params) {
  emits('showSidebar', params)
}

function hideSidebar() {
  emits('hideSidebar')
}
</script>
