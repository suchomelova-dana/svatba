<script setup lang="ts">
interface InfoBlock {
  lines: string[]
  icon: string
  numbers?: boolean
}

const blocks: InfoBlock[] = [
  {
    icon: 'locattion',
    lines: ['Ořechový Dvůr', 'Velké Nepodřice 33, 397 01'],
  },
  {
    icon: 'calendar',
    lines: ['Sobota 23.5.2026'],
    numbers: true,
  },
]
</script>

<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-240 mx-auto my-32 px-6 text-center sm:divide-x sm:divide-neutral-400">
    <div
      v-for="(block, i) in blocks"
      :key="i"
      class="flex flex-col items-center justify-center px-6"
    >
      <img
        :src="`/icons/${block.icon}.svg`"
        :alt="block.lines[0]"
        class="w-14 h-14 mb-6"
      >
      <div class="font-numbers">
        <p
          v-for="line in block.lines"
          :key="line"
          class="uppercase tracking-widest text-sm text-neutral-800 leading-loose m-0"
        >
          {{ line }}
        </p>
      </div>
    </div>
  </section>
</template>
