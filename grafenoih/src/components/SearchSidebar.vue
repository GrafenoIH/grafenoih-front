<template>
  <main class="h-[88%] ml-4 bg-bgcolor rounded-bl p-4 border flex flex-col gap-2 border-custom-100">
    <ul class="h-full flex flex-col gap-4 overflow-y-scroll">
      <li v-for="i in results" :key="i" class="font-paragraph text-accent">
        <a
          :href="i?.link"
          target="_blank"
          class="hover:text-custom-200 transition duration-150 cursor-pointer hover:underline"
        >
          {{ '- ' + i.title }}
          <ArrowUpRightFromSquare class="mb-[2px] ml-[2px] inline" :size="12" />
        </a>
      </li>
    </ul>
  </main>
</template>

<script setup>
import { ArrowUpRightFromSquare } from 'lucide-vue-next'

defineProps({
  results: {
    type: Array,
    default: null,
  },
})
</script>
