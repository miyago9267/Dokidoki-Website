<template>
    <div name="cg-background" class="flex justify-center items-center w-full relative">
        <img class="bg object-cover opacity-[30%] w-full h-full absolute z-0" />
        <div class="flex flex-col items-center h-full md:pt-[25px] pt-[50px]">
            <IndexIntroTextblock class="my-[10px] md:h-[200px] h-[80px] w-[90%] mx-[5%] z-10" />
            <img src="/images/doki11.png" class="lg:w-[30%] w-[50%] opacity-[100%] mb-[30px] z-10" />
            <div class="inline-block md:px-10 px-5 py-0 bg-pink-300 text-black md:text-2xl text-sm font-bold rounded-lg border-2 border-pink-400 text-center cursor-pointer hover:bg-pink-600 z-[10]">
                <a class="text-black no-underline" href="https://airem.itch.io/play-with-me-escape-room"><p class="py-0 md:my-[10px] my-[3px]">立即下載</p></a>
            </div>
            <IndexLink class="z-10 w-[150%]" :link="linkList || {}" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Link } from '~/types/about/types'

const linkList: Link = {
    'facebook': 'https://www.facebook.com/profile.php?id=61566648647530&mibextid=LQQJ4d',
    'ig': 'https://www.instagram.com/tokimeki.diary1007/profilecard/?igsh=eXIzOHl6dTZuZ2V0',
    'youtube': ' https://youtube.com/@tokimeki.diary1007?si=hEgI0F3lEf3q3HvY',
    'tiktok': 'https://www.tiktok.com/@tokimeki.diary1007?_t=8raqbEFyR0B&_r=1',
}

</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Zen+Maru+Gothic&display=swap');
p {
	font-family: "Zen Maru Gothic", sans-serif !important;
}

.bg {
    background-image: url('/images/background/homepage.jpg');
    background-size: cover;
}
</style>