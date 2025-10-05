<template>
  <div class="appbg w-full h-full p-4">
    <header class="w-full flex flex-row justify-between">
      <h1 class="font-display text-accent text-2xl">grafeno</h1>

      <span
        class="text-custom-100 bg-bgcolor p-2 w-128 font-paragraph flex flex-row gap-4 justify-between rounded-bl items-center border border-custom-100"
      >
        <input
          type="text"
          placeholder="Search"
          class="w-full appearance-none bg-transparent text-custom-100 placeholder-gray-500 outline-none"
        />
        <Search size="16" class="cursor-pointer" />
      </span>
    </header>
    <main class="h-full w-full flex flex-row justify-between">
      <GraphSession
        class="flex-1"
        @hide-sidebar="hideSidebar()"
        @show-sidebar="(params) => showSidebar(params)"
      />
      <Transition
        enter-active-class="transition-all duration-300 ease-in-out"
        leave-active-class="transition-all duration-300 ease-in-out"
        enter-from-class="translate-x-full opacity-0"
        enter-to-class="translate-x-0 opacity-100"
        leave-from-class="translate-x-0 opacity-100"
        leave-to-class="translate-x-full opacity-0"
      >
        <PaperSidebar v-if="sidebarToggled" class="!w-128 my-4 shrink-0" />
      </Transition>
    </main>
  </div>
</template>

<script setup>
import { Search } from 'lucide-vue-next'
import GraphSession from './components/GraphSession.vue'
import PaperSidebar from './components/PaperSidebar.vue'
import { ref } from 'vue'

const sidebarToggled = ref(false)

function hideSidebar() {
  sidebarToggled.value = false
}
function showSidebar() {
  sidebarToggled.value = true
}
</script>

<style scoped></style>
