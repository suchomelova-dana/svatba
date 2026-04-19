<script setup lang="ts">
interface Props {
  title: string
  paragraphs: string[]
  image: string
  imageSide?: 'left' | 'right'
}

const { imageSide = 'right' } = defineProps<Props>()
</script>

<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 items-center max-w-240 mx-auto my-28 px-6">
    <div
      v-if="imageSide === 'left'"
      class="w-full h-95 sm:h-auto sm:aspect-3/4 bg-neutral-200 bg-cover bg-center order-last sm:order-first"
      :style="{ backgroundImage: `url('${image}')` }"
    />

    <div class="self-center">
      <h3 class="font-numbers text-center tracking-[0.3em] uppercase text-[#C3E3D0] text-6xl sm:text-7xl m-0 mb-6">
        {{ title }}
      </h3>
      <p
        v-for="(p, i) in paragraphs"
        :key="i"
        class="text-sm text-center text-neutral-500 uppercase tracking-[0.08em] leading-loose m-0 mb-4"
      >
        {{ p }}
      </p>
    </div>

    <div
      v-if="imageSide === 'right'"
      class="w-full h-95 sm:h-auto sm:aspect-3/4 bg-neutral-200 bg-cover bg-center"
      :style="{ backgroundImage: `url('${image}')` }"
    />
  </section>
</template>
