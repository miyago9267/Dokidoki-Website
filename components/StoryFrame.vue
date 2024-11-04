<template>
    <div class="w-full">
        <div class="text-[50px] font-black w-[90%] ml-[8%] my-[2%] text-[#C43E87]">故事背景</div>
        <div class="relative w-full z-[0]">
            <img src="/images/bg1.png"
                name="bg1"
                class="absolute w-[95%] lg:h-[65%] right-0 z-[-1]"
                :style="`height: ${bgHeight}px`"
                >
            <div
                name="textblock"
                ref="textblock"
                class="w-[75%] text-[3vw] md:text-[25px] z-[20] pl-[8%] py-[2%] text-[#C43E87] font-bold "
            >
                <p class="text1">
                    初入高中部便情竇初開？！不同的選擇所開創的戀愛道路！
                </p>
                <br>
                <p class="text2">
                    無論是氣質神秘的學姊、從國中就認識的鄰座同學，
                    還是在秘密基地裡無意間碰到的冷淡同學……
                    <br>
                    只要好好地觀察了解，就一定能與對方更加親密吧！
                    <br>
                    <span class="italic text-[#ffe2e6] font-['Dancing Script'] font-[cursive]">找出她們的秘密找出她們的祕密找出她們的祕密</span>
                    <br>
                    更加親近你的同學們，了解她們的喜好與興趣，勇敢地提出約會吧！
                </p>
                <p class="text3">
                    只要抱持著最真摯的感情與內心，
                    就一定能得到你最想要的東西。<br>
                    <span class="italic text-[#ffe2e6] font-['Dancing Script'] font-[cursive]">會是她嗎？</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { ref, onMounted, watchEffect } from 'vue';

const textblock = ref<HTMLElement | null>(null);
const bgHeight = ref(0);

onMounted(() => {
    watchEffect(() => {
        if (textblock.value) {
            bgHeight.value = textblock.value.clientHeight;
            console.log(textblock.value.clientHeight);
        }
    });
});
</script>
