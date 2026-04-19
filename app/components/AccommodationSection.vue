<script setup lang="ts">
const photos = ['/img/ubytovani-1.jpg', '/img/ubytovani-2.png', '/img/ubytovani-3.png']
</script>

<template>
  <section class="max-w-7xl mx-auto my-32 px-6">
    <div class="w-80 h-px bg-neutral-400 mx-auto mb-12" />

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      <div class="flex flex-col items-center justify-center p-6 text-center">
        <h2 class="uppercase text-center text-4xl sm:text-6xl tracking-[0.2em] text-neutral-800 font-normal mb-8">
          Ubytování
        </h2>
        <p class="text-sm text-neutral-500 uppercase tracking-[0.08em] leading-loose max-w-xs m-0">
          Pro všechny hosty je zařízené ubytování v areálu. Každý pokoj má vlastní koupelnu se sociálním zařízením.
        </p>
      </div>

      <div
        v-for="src in photos"
        :key="src"
        class="w-full h-72 sm:h-auto sm:aspect-4/3 bg-neutral-200 bg-cover bg-center"
        :style="{ backgroundImage: `url('${src}')` }"
      />
    </div>
  </section>
</template>
