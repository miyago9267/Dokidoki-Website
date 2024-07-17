<template>
	<NuxtLayout>
		<NuxtPage></NuxtPage>
	</NuxtLayout>
</template>


<style>
	html, body {
		padding: unset !important;
		margin: unset !important;
	}
</style>

<script setup>
	import { useDark, useToggle } from '@vueuse/core'

	let isDark = ref(useDark());
	let toggleDark = ref(useToggle(isDark))
	watch(() => mainState.theme, (themeType) => {
		isDark.value = (themeType === 'dark');
		toggleDark.value = useToggle(isDark.value);
	})
</script>