<template>
  <div id="mynetwork" ref="networkRef"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { DataSet, Network } from 'vis-network/standalone'

// Vue ref for the container div
const networkRef = ref(null)

onMounted(() => {
  const nodes = new DataSet([
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
  ])

  const edges = new DataSet([
    { from: 1, to: 2 },
    { from: 1, to: 3 },
  ])

  const container = networkRef.value
  const data = { nodes, edges }
  const options = {
    nodes: { shape: 'dot', size: 16 },
    edges: { arrows: 'to' },
    physics: { stabilization: false },
  }

  new Network(container, data, options)
})
</script>
