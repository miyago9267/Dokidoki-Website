<template>
	<div
        class="relative grid gap-4 h-full justify-center transition-all duration-[500]"
        :style="gridStyle"
    >
        <div v-for="(item, index) in CharactorList" :key="index"
            class="flex relative bg-cover transition-all duration-[500] bg-custom-img box overflow-hidden"
            :style="`--img: url(${item.imageURL}); --color: ${item.color}`"
            :data-text="item.altText"
            @mouseenter="hoverIndex = index"
            @mouseleave="hoverIndex = -1"
            :class="{ 'filter-none': hoverIndex === index, 'filter-grayscale': hoverIndex !== -1 && hoverIndex !== index }"
        >
        </div>
	</div>
</template>

<script setup lang="ts">

interface Charactor {
    imageURL: string;
    altText: string;
    color: string;
}

const CharactorList: Charactor[] = [
    { imageURL: 'https://i.postimg.cc/hvsQkSjd/gal-game-1.png', altText: '紅月 茜', color: '#D5071F' },
    { imageURL: 'https://i.postimg.cc/jd8JvdBV/gal-game-2.png', altText: '朝日奈 胡桃', color: '#D26614' },
    { imageURL: 'https://i.postimg.cc/HkV8N1Cr/gal-game-3.png', altText: '天井 薰', color: '#633894' },
    { imageURL: 'https://i.postimg.cc/tCRxhVSt/gal-game-4.png', altText: '杉野 榛', color: '#53C0CA' },
    { imageURL: 'https://i.postimg.cc/ht6QWZSp/gal-game-5.png', altText: '白雪 楓', color: '#6D607B' },
    { imageURL: 'https://i.postimg.cc/6QZ29Vqw/gal-game-6.png', altText: '小鳥遊 邊瑠', color: '#6E2B17' },
];

const hoverIndex = ref<number>(-1);

const gridStyle = computed(() => {
  const columns = CharactorList.map((_, index) => (index === hoverIndex.value ? '2fr' : '1fr')).join(' ');
  return {
    gridTemplateColumns: columns,
    transition: 'grid-template-columns 0.4s ease'
  };
});

</script>

<style scoped>
.box::after {
  content: attr(data-text);
  position: absolute;
  bottom: 8px;
  left: 2px;
  padding: 10px 10px 10px 14px;
  letter-spacing: 3px;
  transform: translateX(60px);
  opacity: 0;
  transition: all 500ms;
  font-size: 40px;
  font-weight: 900;
  color: var(--color);
  white-space: nowrap;
  text-shadow: -2px 0 white, 0 2px white, 2px 0 white, 0 -2px white;
}

.box:hover::after {
  transform: translateX(0px);
  opacity: 1;
  transition-delay: 400ms;
}
</style>