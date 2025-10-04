<script setup>
import { Search } from 'lucide-vue-next'
import GraphSession from './components/GraphSession.vue'
import PaperSidebar from './components/PaperSidebar.vue'
</script>

<template>
  <header class="w-full flex flex-row justify-between">
    <h1 class="font-display text-accent text-2xl">grafeno</h1>

    <span
      class="text-custom-100 p-2 w-128 font-paragraph flex flex-row gap-4 justify-between rounded-bl items-center border border-custom-100"
    >
      <input
        type="text"
        placeholder="Search"
        class="w-full appearance-none bg-transparent text-custom-100 placeholder-gray-500 outline-none"
      />
      <Search size="16" />
    </span>
  </header>
  <main class="h-full w-full flex flex-row justify-between">
    <GraphSession />
    <PaperSidebar class="!w-128 mt-4" />
  </main>
</template>

<style scoped></style>
