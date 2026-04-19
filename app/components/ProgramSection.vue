<template>
  <section class="relative py-32 px-6 overflow-hidden">
    <div
      class="absolute inset-0 z-0 bg-cover bg-center grayscale brightness-110 opacity-10"
      :style="{ backgroundImage: `url('/img/program-bg.jpg')` }"
    />

    <div class="relative z-10 max-w-190 mx-auto flex flex-col items-center">
      <h2 class="uppercase text-center text-4xl sm:text-6xl tracking-[0.2em] text-neutral-800 font-normal mb-12 mt-0">
        Program
      </h2>
      <img
        src="/program.svg"
        alt="Program svatebního dne"
        class="w-full max-w-xl h-auto"
      >
    </div>
  </section>
</template>
