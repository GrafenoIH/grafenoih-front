<template>
  <div id="mynetwork" ref="networkRef"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { DataSet, Network } from 'vis-network/standalone'
import graphService from '@/services/graphservice'

const networkRef = ref(null)

const emits = defineEmits(['hideSidebar', 'showSidebar'])

onMounted(() => {
  let nodesResponse = graphService.getEdges().data

  let listNodes = []

  for (let i = 0; i < nodesResponse.length; i++) {
    const currentNode = nodesResponse[i]

    const newNode = {
      id: currentNode.id,
      label: currentNode.name,
    }

    listNodes.append(newNode)
  }

  const nodes = new DataSet([
    {
      id: 1,
      label: 'Health and Health Tissue in Microgravity',
    },
    {
      id: 2,
      label: 'Stem Cell Health and Tissue Regeneration in Microgravity',
    },
    {
      id: 3,
      label: 'Cell Health and Cell Regeneration in Microgravity Tissue',
    },
  ])
  const edges = new DataSet([{ from: 1, to: 2 }])

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
      font: {
        color: '#5FFE99',
        size: 16,
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

  network.on('hoverNode', () => {})

  network.on('selectNode', (params) => {
    showSidebar(params)
  })
  network.on('deselectNode', () => {
    hideSidebar()
  })
})

function showSidebar(params) {
  emits('showSidebar', params)
}

function hideSidebar() {
  emits('hideSidebar')
}
</script>
