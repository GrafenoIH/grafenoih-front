<template>
  <div class="flex flex-col gap-4">
    <main
      class="w-full rounded-tl h-[70%] flex flex-col gap-4 bg-bgcolor text-accent border border-custom-100 p-4"
    >
      <a
        :href="node?.link"
        target="_blank"
        class="text-lg font-display hover:text-custom-200 transition duration-150 cursor-pointer hover:underline"
      >
        {{ node?.title }}

        <ArrowUpRightFromSquare class="inline" :size="16" />
      </a>
      <h3 class="font-paragraph text-custom-100">
        {{ node?.data }}
      </h3>
      <h3 class="font-paragraph text-custom-100">
        {{ formatAuthors(node?.authors) }}
      </h3>

      <a v-if="false" class="font-paragraph text-custom-100" target="_blank" :href="node?.link"
        >node?.link</a
      >
      <p class="font-paragraph">Abstract:</p>
      <p class="text-sm font-paragraph text-pretty overflow-y-scroll">
        {{ node?.abstract }}
      </p>
    </main>
    <footer class="h-[20%] bg-bgcolor rounded-bl p-4 border flex flex-col gap-2 border-custom-100">
      <h2 class="text-custom-100 font-display">Similar Papers</h2>
      <ul class="h-full flex flex-col gap-2 overflow-y-scroll">
        <li v-for="i in 6" :key="i" class="font-paragraph text-accent">
          <a class="hover:text-custom-200 transition duration-150 cursor-pointer hover:underline">
            - Related Research {{ i }}
            <ArrowUpRightFromSquare class="mb-[2px] ml-[2px] inline" :size="12" />
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ArrowUpRightFromSquare } from 'lucide-vue-next'

defineProps({
  node: {
    type: Object,
    default: null,
  },
})

function formatAuthors(authors) {
  let authorsList = ''

  authorsList = authors.replaceAll("'", '') + ', '

  return authorsList.substring(1, authorsList.length - 3)
}
</script>
