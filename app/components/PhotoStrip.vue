<script setup lang="ts">
const photos = {
  left: '/img/slide-eft.jpg',
  main: '/img/slide-main.jpg',
  right: '/img/slide-right.jpg',
}
</script>

<template>
  <section class="grid grid-cols-3 gap-4 sm:gap-10 max-w-5xl mx-auto my-32 px-6 items-center">
    <div
      class="aspect-4/3 bg-neutral-200 bg-cover bg-center"
      :style="{ backgroundImage: `url('${photos.left}')` }"
    />
    <div
      class="aspect-2/3 bg-neutral-200 bg-cover bg-center"
      :style="{ backgroundImage: `url('${photos.main}')` }"
    />
    <div
      class="aspect-4/3 bg-neutral-200 bg-cover bg-center"
      :style="{ backgroundImage: `url('${photos.right}')` }"
    />
  </section>
</template>
