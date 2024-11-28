<template>
	<div class="w-full">
		<div class="w-full flex flex-col items-center my-[10px]">
			<h1 class="text-4xl my-2 text-[#de7aca]">Character</h1>
			<div class="md:w-full w-40 h-1 bg-[#de7aca] md:mx-25"></div>
		</div>
		<CharacterSelect class="mt-5" @toggle="handleToggle"></CharacterSelect>
		<div v-for="chara in CharaList" key="chara.index">
			<CharacterInfoRe
				v-if="currentPanel === chara.panel"
				class="mb-[3%] pb-[18%] lg:pb-[3%] w-full"
				:maincolor="chara.maincolor"
				:image="chara.image"
				:bg="chara.bg"
				:item="chara.item"
				:name="chara.name"
				:intro="chara.intro"
				:info="chara.info"
				:subInfo="chara.subInfo"
				:panel="chara.panel"
				:hashtags="chara.hashtags"
			/>
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
</style>