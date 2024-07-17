<template>
    <div class="flex h-15!">
        <el-icon :size="'20px'" @click="isCollapse = !isCollapse" class="self-center m-inline-4 cursor-pointer hover:color-d3d3d3">
            <Fold v-if="!isCollapse" />
            <Expand v-else />
        </el-icon>
        <h1 class="self-center select-none">Title</h1>
        <div class="ms-auto self-center b-unset! mr-2 cursor-pointer hover:color-7194e5">
            <el-icon :size="'22px'" @click="isDark = !isDark">
                <Sunny v-if="!isDark" />
                <Moon v-else />
            </el-icon>
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
    mainState.theme = v ? 'dark' : 'light';
})

watch(isCollapse, (v) => {
    mainState.menuCollapse = v;
})
</script>