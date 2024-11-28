<template>
	<div class="flex flex-col block md:hidden relative">
        <div class="flex p-4 rounded-xl border-2 border-gray-300 justify-end"
            @click="toggleMenu">
            <svg v-if="!isMenuOpen" class="w-6 h-6"
                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
            <svg v-else class="w-6 h-6"
                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </div>
        <transition name="slide-fade">
            <ul v-if="isMenuOpen"
                class="absolute flex flex-col px-3 pt-8 pb-3 text-xl font-black my-1 z-50 bg-gray-100 rounded-xl min-w-max"
                style="top: 80%; right: 0%;"
            >
                <li
                    class="flex block-center justify-end list-none hover:bg-[rgba(235,112,208,0.39)] rounded-xl"
                    v-for="item in menuList" :key="item.name">
                        <nuxt-link :to="item.path" class="px-8 py-4 block-center no-underline text-[#262626] whitespace-nowrap">
                            {{ item.name }}
                        </nuxt-link>
                </li>
            </ul>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    console.log('toggleMenu')
}

const isMenuOpen = ref(false)

interface Menu {
    name: string;
    path: string;
}

const menuList: Menu[] = [
    {name: '首頁', path: '/'},
    {name: '簡介', path: '/story'},
    {name: '角色介紹', path: '/character'},
    {name: '關於我們', path: '/about'}
]

</script>
<style scoped>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity 0.5s;
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
}
</style>