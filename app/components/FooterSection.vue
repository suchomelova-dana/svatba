<script setup lang="ts">
const photos = [
  '/img/fotter-1.jpg',
  '/img/fotter-2.jpg',
  '/img/fotter-3.jpg',
  '/img/fotter-4.jpg',
]
</script>

<template>
  <section class="mt-32">
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 px-4">
      <div
        v-for="src in photos"
        :key="src"
        class="w-full aspect-2/3 bg-neutral-200 bg-cover bg-center"
        :style="{ backgroundImage: `url('${src}')` }"
      />
    </div>

    <h2 class="uppercase text-center text-neutral-800 text-4xl sm:text-6xl tracking-[0.2em] font-normal my-16">
      Budeme se těšit
    </h2>
  </section>
</template>
