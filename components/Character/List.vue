<template>
	<div
        class="trans-grid relative grid md:gap-4 gap-1 md:h-full justify-center transition-all duration-[500]"
        :style="gridStyle"
    >
        <div v-for="(item, index) in CharacterList" :key="index"
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

interface Character {
    imageURL: string;
    altText: string;
    color: string;
}

const CharacterList: Character[] = [
    { imageURL: '/images/gal_game-1.png', altText: '紅月 茜', color: '#D5071F' },
    { imageURL: '/images/gal_game-2.png', altText: '朝日奈 胡桃', color: '#D26614' },
    { imageURL: '/images/gal_game-3.png', altText: '天井 薰', color: '#633894' },
    { imageURL: '/images/gal_game-4.png', altText: '杉野 榛', color: '#53C0CA' },
    { imageURL: '/images/gal_game-5.png', altText: '白雪 楓', color: '#6D607B' },
    { imageURL: '/images/gal_game-6.png', altText: '小鳥遊 邊瑠', color: '#6E2B17' },
];

const hoverIndex = ref<number>(-1);

const gridStyle = computed(() => {
  const columns = CharacterList.map((_, index) => (index === hoverIndex.value ? 'var(--fr-scale, 2fr)' : '1fr')).join(' ');
  return {
    gridTemplateColumns: columns,
    transition: 'grid-template-columns 0.4s ease'
  };
});

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Zen+Maru+Gothic&display=swap');
[data-text] {
	font-family: "Zen Maru Gothic", sans-serif !important;
}

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

/* 預設使用2fr */
.trans-grid {
  --fr-scale: 2fr;
}

/* 視窗大於1200px時縮放比例 */
@media (min-width: 1200px) {
  .trans-grid {
    --fr-scale: 2fr;
  }
}

/* 視窗介於768px到1200px時使用1.5fr */
@media (max-width: 1200px) and (min-width: 768px) {
  .trans-grid {
    --fr-scale: 4fr;
  }
  .box::after {
    font-size: 40px;
  }
}

/* 視窗小於768px時使用1fr */
@media (max-width: 768px) {
  .trans-grid {
    --fr-scale: 10fr;
  }

  .box::after {
    font-size: 30px;
  }
}
</style>