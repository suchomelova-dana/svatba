<script setup lang="ts">
const photoParagraphs = [
  'Na sobotu máme zařízenou profesionální fotografku a kameramana. Nezakazujeme vám během tohoto dne fotit (pouze u obřadu, to prosím mobil nevytahujte), ale není to úplně nutné, jakmile obdržíme materiály, pošleme (a zveřejníme tady) odkaz na fotky.',
  'Pokud se vám podaří během pátku u příprav, či v sobotu během dne zachytit nějaké fotky/videa, rádi bychom je se všemi sdíleli, proto jsme připravili sdílené album, kam je můžete nahrát.',
]

const dresscodeText = 'Budeme rádi, když alespoň přibližně dodržíte barevné téma. Pokud to pro vás nebude možné, volte prosím neutrální barvy (černá, béžová, hnědá, šedá – ne bílá!), aby oděv nepůsobil rušivě. Nejdůležitější pro nás ale je, abyste se cítili dobře.'

const colors = ['#2e5c3e', '#bcd6c4', '#e8dcc5', '#1a2849', '#c89a34']

const albumUrl = 'https://photos.app.goo.gl/yfi8em6nvvdkwyls6'
</script>

<template>
  <section class="relative max-w-240 mx-auto my-32 px-6 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-x-24">
    <span class="hidden sm:block absolute left-1/2 top-1/4 bottom-1/4 w-px bg-neutral-300 -translate-x-1/2" />

    <div class="text-center px-4 flex flex-col items-center">
      <h2 class="uppercase text-center text-4xl sm:text-6xl tracking-[0.2em] text-neutral-800 font-normal mb-8 whitespace-nowrap">
        Foto a Video
      </h2>
      <p
        v-for="(p, i) in photoParagraphs"
        :key="i"
        class="text-sm text-neutral-600 uppercase tracking-[0.08em] leading-loose max-w-sm mb-6"
      >
        {{ p }}
      </p>

      <img
        src="/qr-code.svg"
        alt="QR kód pro sdílené album"
        class="mt-6 w-44 h-44"
      >
      <p class="mt-5 uppercase text-sm tracking-[0.18em] text-neutral-700">
        Naskenuj a sdílej fotky
      </p>
      <p class="mt-6 uppercase text-xs tracking-[0.18em] text-neutral-500">nebo</p>
      <p class="uppercase text-xs tracking-[0.18em] text-neutral-500 mb-1">klikni na odkaz</p>
      <a
        :href="albumUrl"
        target="_blank"
        rel="noopener"
        class="mt-3 inline-block uppercase text-xs tracking-[0.25em] text-neutral-800 border border-[#C3E3D0] px-8 py-3 hover:bg-[#C3E3D0] transition-colors"
      >
        Otevřít album
      </a>
    </div>

    <div class="text-center px-4 flex flex-col items-center justify-center">
      <h2 class="uppercase text-center text-4xl sm:text-6xl tracking-[0.2em] text-neutral-800 font-normal mb-8">
        Dresscode
      </h2>
      <p class="text-sm text-neutral-600 uppercase tracking-[0.08em] leading-loose max-w-sm mb-8">
        {{ dresscodeText }}
      </p>

      <div class="flex gap-4">
        <span
          v-for="c in colors"
          :key="c"
          class="w-10 h-10 rounded-full inline-block shadow-md"
          :style="{ backgroundColor: c }"
        />
      </div>
    </div>
  </section>
</template>
