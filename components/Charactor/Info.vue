<template>
<div class="flex md:flex-row flex-col mb-5 pt-[10%] h-screen items-center">
    <div class="flex w-[45%] md:h-full h-1/2 relative justify-center">
        <div class="md:w-[90%] md:h-[45%] w-[100%] h-[50%] mt-10 absolute z-[-1] left-0"
            :style="{ backgroundColor: props.maincolor }"
        ></div>
        <img :src="props.image" alt="" class="md:w-[55%] md:h-[75%] w-[80%] h-[100%] md:absolute md:bottom-60 md:right-15">
    </div>
    <div class="flex flex-col h-full w-[55%] md:items-start items-center">
        <p class="nerd md:text-6xl text-4xl mb-1 font-bold mt-0 md:text-left md:mx-25">{{props.name}}</p>
        <div class="md:w-120 w-40 h-1 bg-[#D5071F] md:mx-25 mb-4"></div>
        <ul class="flex flex-col items-start list-none list-inside pl-0 md:mx-30">
            <li class="md:text-xl text-lg mb-2">年齡　|　{{ props.age }}</li>
            <li class="md:text-xl text-lg mb-2">星座　|　{{ props.starSign }}</li>
            <li class="md:text-xl text-lg mb-2">社團　|　{{ props.club }}</li>
            <li class="md:text-xl text-lg mb-2">愛好　|　{{ props.hobbies }}</li>
        </ul>
        <div class="flex flex-col list-inside items-center w-[100%] md:h-320 h-full">
            <p v-html="props.info" class="text-left text-gray-400 w-90 md:w-[80%] md:text-lg text tracking-widest md:leading-[30px] leading-[1.5rem] py-3 break-words mb-0">
            </p>
            <p v-html="props.subInfo" class="text-left text-[#f5b4bc] w-90 md:w-[80%] md:text-lg text tracking-widest md:leading-[40px] leading-[2.0rem] py-3 break-words mt-0">
            </p>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">

import { defineProps } from 'vue';

interface CharaInfo {
    maincolor: string;
    image: string;
    name: string;
    age: string;
    starSign: string;
    club: string;
    hobbies: string;
    info: string;
    subInfo: string;
}

const props = defineProps<CharaInfo>();

</script>