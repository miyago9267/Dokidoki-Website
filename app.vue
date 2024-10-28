<template>
	<NuxtLayout>
		<NuxtPage></NuxtPage>
	</NuxtLayout>
</template>


<style>
	html, body {
		padding: unset !important;
		margin: unset !important;
		font-family: "Microsoft JhengHei", sans-serif;
	}
</style>

<script setup>
import { useDark, useToggle } from '@vueuse/core'

useSeoMeta({
	title: '心動不已☆告白日記',
	ogTitle: '心動不已☆告白日記',
	description: '六個性格迥異的美少女 —— 請在她們之中選擇正確的人吧！',
	ogDescription: '六個性格迥異的美少女 —— 請在她們之中選擇正確的人吧！',
});

let isDark = ref(useDark());
let toggleDark = ref(useToggle(isDark))
watch(() => mainState.theme, (themeType) => {
	isDark.value = (themeType === 'dark');
	toggleDark.value = useToggle(isDark.value);
})
</script>