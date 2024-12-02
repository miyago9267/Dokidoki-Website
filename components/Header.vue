<template>
    <div class="flex h-full w-full">
		<div class="flex logo pt-[20px]">
            <nuxt-link to="/" class="flex items-center">
                <img src="/images/doki11.png" class="h-[100%] md:h-[120%] w-[144%] items-center">
            </nuxt-link>
        </div>
        <div class="grow"></div>
        <div name="memu" class="flex z-40">
            <HeaderHambergur class="justify-center" />
            <HeaderMenu  />
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