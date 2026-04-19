<template>
  <section class="relative w-full h-[60vh] min-h-[80vh] overflow-hidden">
    <div
      class="absolute inset-0 bg-neutral-200 bg-cover bg-center"
      :style="{ backgroundImage: `url('/img/hero.jpg')` }"
    />
    <div class="relative z-10 h-full flex flex-col items-center justify-center text-center text-white font-light leading-none tracking-[0.05em] drop-shadow-lg text-[clamp(5rem,14vw,8rem)] font-numbers">
      <span>23</span>
      <span>05</span>
      <span>26</span>
    </div>
  </section>
</template>
