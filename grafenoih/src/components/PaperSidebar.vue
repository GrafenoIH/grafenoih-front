<script setup lang="ts">
import { ArrowUpRightFromSquare } from 'lucide-vue-next'
</script>

<template>
  <div
    class="w-full rounded-tl h-full flex flex-col gap-4 text-accent border border-custom-100 p-4"
  >
    <h2
      class="text-lg font-display hover:text-custom-200 transition duration-150 cursor-pointer hover:underline"
    >
      Stem Cell Health and Tissue Regeneration in Microgravity

      <ArrowUpRightFromSquare class="inline" :size="16" />
    </h2>

    <h3 class="font-paragraph text-custom-100">
      Elizabeth Blaber 1 , Kevin Sato, Eduardo A C Almeida
    </h3>
    <a
      v-if="false"
      class="font-paragraph text-custom-100"
      target="_blank"
      href="https://pubmed.ncbi.nlm.nih.gov/25457968/"
      >https://pubmed.ncbi.nlm.nih.gov/25457968/</a
    >
    <p class="font-paragraph">Abstract:</p>
    <p class="text-sm font-paragraph text-pretty overflow-y-scroll">
      Exposure to microgravity causes significant mechanical unloading of mammalian tissues,
      resulting in rapid alterations of their physiology, which poses a significant risk for
      long-duration manned spaceflight. The immediate degenerative effects of spaceflight we
      understand best are those studied during short-term low-Earth-orbit experiments, and include
      rapid microgravity-adaptive bone and muscle loss, loss of cardiovascular capacity, defects in
      wound and bone fracture healing, and impaired immune function. Over the long-term, exposure to
      microgravity may cause severe deficits in mammalian stem cell-based tissue regenerative
      health, including, osteogenesis, hematopoiesis, and lymphopoeisis, as well as cause
      significant stem cell-based tissue degeneration in amphibian tail and lens regeneration. To
      address the needs for stem cell and other cell science research on the International Space
      Station (ISS), NASA has developed the new Bioculture System that will allow investigators to
      initiate and conduct on-orbit experiments that astronauts will be able to monitor and interact
      with during the course of cell cultures. This cell culture capability combined with advanced
      technologies for molecular biology and on-orbit measurement of gene expression (WetLab2) and
      other tools that are now coming online bring the ISS National Laboratory a step closer to
      becoming a fully functional space laboratory for advancing space biological sciences. eeds for
      stem cell and other cell science research on the International Space Station (ISS), NASA has
      developed the new Bioculture System that will allow investigators to initiate and conduct
      on-orbit experiments that astronauts will be able to monitor and interact with during the
      course of cell cultures. This cell culture capability combined with advanced technologies for
      molecular biology and on-orbit measurement of gene expression (WetLab2) and other tools that
      are now coming online bring the ISS National Laboratory a step closer to becoming a fully
      functional space laboratory for advancing space biological sciences.
    </p>
  </div>
</template>
