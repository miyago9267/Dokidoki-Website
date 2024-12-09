<template>
	<div class="w-full">
		<CharacterSelect class="my-5" @toggle="handleToggle"></CharacterSelect>
		<div v-for="chara in CharaList" key="chara.index">
			<transition name="fade-left">
				<CharacterInfoRe
					v-if="currentPanel === chara.panel"
					class="mb-[3%] pb-[18%] lg:pb-[3%] w-full"
					:maincolor="chara.maincolor"
					:subcolor="chara.subcolor"
					:image="chara.image"
					:bg="chara.bg"
					:item="chara.item"
					:name="chara.name"
					:spellname="chara.spellname"
					:intro="chara.intro"
					:info="chara.info"
					:subInfo="chara.subInfo"
					:panel="chara.panel"
					:hashtags="chara.hashtags"
					:clothe="chara.clothe"
				/>
			</transition>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentPanel = ref<string>('1');
import type { CharaInfo } from '~/types/about/types'
const { data } = await useFetch('/api/character')

const CharaList = data.value as CharaInfo[]

const handleToggle = (value: string) => {
	currentPanel.value = value;
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&family=Zen+Maru+Gothic&display=swap');

h1 {
    font-family: "Playwrite GB S", cursive;
}

.fade-left-enter-active, .fade-left-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.fade-left-enter-from, .fade-left-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-left-enter-to, .fade-left-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>