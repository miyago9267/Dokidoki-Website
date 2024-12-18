<template>
<nav class="hidden md:block">
    <ul
        class="flex px-1 pt-7 pb-3 text-xl font-black my-1 rounded-xl"
    >
        <li class="flex items-center list-none hover:bg-[rgba(235,112,208,0.39)] min-w-max rounded-xl"
            v-for="item in menuList" :key="item.name"
            >
            <nuxt-link :to="item.path" class="mx-1 px-8 py-4 block-center no-underline text-[#262626] whitespace-nowrap">
                {{ item.name }}
            </nuxt-link>
        </li>

     </ul>
</nav>
</template>
<script setup lang="ts">

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