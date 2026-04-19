<script setup lang="ts">
const patek = [
  'V pátek budou probíhat přípravy před svatbou. My budeme na místě už od čtvrtku, takže dorazit můžete opravdu kdykoliv během dne (dejte nám prosím vědět aspoň přibližný čas, abysme měli přehled). Budeme moc rádi, když nám s přípravami pomůžete, takže pokud by se vám podařilo dorazit v brzských hodinách, určitě bychom vás zužitkovali.',
  'Kdo bude na Ořecháči už na oběd, společně si něco uvaříme. Doufáme, že si společné přípravy užijeme a uděláme si z toho hezký zážitek.',
  'V pátek počítáme s večerním grilováním. Jídlo s sebou nevozte, vše bude nakoupeno. Pouze pokud byste měli speciální přání, tak nám dejte vědět. Nebojte budeme myslet i na vegetariány.',
]

const sobota = [
  'Budeme se držet přiloženého harmonogramu, ale víte jak to chodí…',
  'V sobotu ráno si dáme snídani, kafe a pak se vrhneme na doladění výzdoby. Uvidíme kolik se toho stihne nachystat v pátek, a jak nám počasí dovolí nechat vyzdobené venkovní (terasové) prostory. Pokud bude potřeba větších úprav, budeme delegovat zodpovědné osoby na jednotlivých stanovištích, tak aby to měl někdo na starosti a nevěsta s ženichem se mohli v klidu připravit na ceremonii.',
  'Pak se společně vydáme na obřad, kde si řekneme své „ANO". Bude čas na gratulace a samozřejmě si uděláme společné fotky, ať máme památku.',
  'Po obřadu se přesuneme do zastřešené terasy, kde bude hostina. Připravili jsme si pro vás náš oblíbený pokrm poke bowl. Bude servírovaný způsobem švédského stolu, a tedy každý si bude moct sestavit svůj poke bowl dle libosti.',
  'Po obědě se novomanželé na chvíli vzdálí, aby si vyfotili nějaké párové fotky. Tento volný čas necháme na vás. Pokud budete unavení a budete si chtít odpočinout, klidně se vzdalte do svých pokojů. Ale to že novomanželé nejsou přítomni neznamená, že zábava nesmí pokračovat. Takže klidně se bavte, pijte a konejte dle libosti.',
  'Ze svatebních tradic jsme zvolili stříhání stužek ze svatební kytice, které se budou účastnit jak slečny, tak i svobodní pánové. Dále pak krájení dortu a první novomanželský tanec. No máte se na co těšit.',
  'Večeře bude formou rautu, kde bude na výběr z mnoha jak masových tak i bezmasích variant.',
  'A pak už bude volná zábava.',
]

const nedele = [
  'V neděli už nás žádný společný program nečeká. Posnídáme a zasmějeme se nad včerejšími událostmi. Kdo by měl čas a chuť pomoci s úklidem, tak rádi přivítáme pomoc. Jinak se rozprchneme domů.',
]
</script>

<template>
  <div class="bg-white text-neutral-600">
    <HeroSection />
    <InfoRow />
    <PhotoStrip />
    <ProgramSection />

    <SectionTitle>Detailnější<br>program</SectionTitle>

    <DaySection
      title="Pátek"
      :paragraphs="patek"
      image="/img/program-1.jpg"
      image-side="right"
    />
    <DaySection
      title="Sobota"
      :paragraphs="sobota"
      image="/img/program-2.jpg"
      image-side="left"
    />
    <DaySection
      title="Neděle"
      :paragraphs="nedele"
      image="/img/program-3.jpg"
      image-side="right"
    />

    <AccommodationSection />
    <PhotoDresscodeSection />
    <FooterSection />
  </div>
</template>
