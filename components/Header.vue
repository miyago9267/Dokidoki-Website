<template>
    <div class="flex h-full w-full">
		<div class="flex logo">
            <nuxt-link to="/" class="flex items-center">
                <img src="/images/Gal_game_LOGO.png" class="h-[80%] md:h-[100%] w-[120%] items-center">
            </nuxt-link>
        </div>
        <div class="grow"></div>
        <div name="memu" class="flex z-40">
            <hambergur class="justify-center" />
            <header-menu  />
        </div>
    </div>
</template>

<script setup>
import { Sunny, Moon, Fold, Expand } from '@element-plus/icons-vue'
const isDark = ref(false)
const isCollapse = ref(mainState.menuCollapse)

onMounted(() => {
    isDark.value = mainState.theme;
})

watch(isDark, (v) => {
    mainState.theme = v ? 'light' : 'dark';
})

watch(isCollapse, (v) => {
    mainState.menuCollapse = v;
})
</script>