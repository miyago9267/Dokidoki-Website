<template>
<div class="flex md:flex-row flex-col mb-5 py-[10%] md:h-[530px] items-center relative">
    <img class="bg object-cover w-full h-[95%] absolute z-[0]" :style="{ backgroundImage: `url(${props.bg})` }" />
    <div class="flex w-[40%] md:h-full h-1/2 relative justify-center z-0">
        <img :src="props.item" alt="" class="md:absolute md:w-[20%] md:h-[20%] w-[100%] h-[100%] md:left-3 md:top--10">
        <img :src="props.image" alt="" class="md:absolute md:w-[360px] w-[100%] h-[120%] md:bottom-0 md:right--10">
        <div class="md:absolute md:bottom-20 md:left-5 flex flex-col w-250px text-2xl">
            <p class="font-black pl-[10%] m-[2%] hashtag" :style="{ color: props.maincolor }">#{{ props.hashtags[0] }}</p>
            <p class="font-black pl-[40%] m-[2%] hashtag" :style="{ color: props.maincolor }">#{{ props.hashtags[1] }}</p>
        </div>
    </div>
    <div class="flex flex-col h-full w-[60%] md:items-start items-center z-[10]">
        <p class="md:w-[95%] nerd md:text-6xl text-4xl mb-[0.5rem] font-bold mt-0 md:text-right md:mr-10">{{props.name}}</p>
        <div class="md:w-full w-40 h-1 bg-[#D5071F] md:mx-2 my-2 z-[20]"></div>
        <p v-html="props.info" class="text-left text-black font-bold w-90 md:w-[80%] md:text-lg text tracking-widest md:leading-[30px] leading-[1.5rem] py-3 break-words mb-0">
        </p>
        <ul class="flex flex-col items-start list-none list-inside pl-0 md:mr-30">
            <li class="md:text-xl text-lg mb-2 text-center" v-for="(val) in introArr">
                <span class="flex whitespace-nowrap">
                    <span class="relative font-bold w-[120px] flex justify-center items-center">
                        <img class="absolute w-[100px] h-[30px] z-[-1]" src="/images/select_bar.png">
                        <span class="text-center z-[1]">{{val[0]}}</span>
                    </span>
                    {{ val[1] }}
                </span>
            </li>
        </ul>
    </div>
</div>
</template>

<script lang="ts" setup>
import type { CharaInfo } from '~/types/about/types'

const props = defineProps<CharaInfo>();
const introArr = ref(Object.entries(props.intro));

console.log(introArr);

</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Zen+Maru+Gothic&display=swap');
p, span {
    font-family: "Zen Maru Gothic", sans-serif !important;
}

.bg {
    background-size: cover;
}

.hashtag {
    text-shadow: -2px 0 white, 0 2px white, 2px 0 white, 0 -2px white;
}

.listmark {
    background-image: url('/images/select_bar.png');
    background-size: contain;

}
</style>