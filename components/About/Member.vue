<template>
    <div class="relative flex justify-center">
        <div class="absolute w-full h-full bg-[#FFFFFF] z-[-1]"></div>
        <div class="flex flex-col h-full">
            <div class="flex justify-center mt-5 h-1/2">
                <div class="absolute w-50 h-50 bg-[#ff85f1] rounded-full">
                    <img :src="props.photo" class="w-full h-full rounded-full object-cover" alt="member photo">
                </div>
            </div>
            <div class="flex flex-col flex-[5] items-center">
                <h2 class="text-[#000] my-3">{{ props.name }}</h2>
                <div v-for="r in props.role">
                    <p class="text-[#000] my-1">{{ r }}</p>
                </div>
                <div v-for="link in linkList">
                    <p class="text-[#000] my-1">{{ link.social }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

import { defineProps } from 'vue';

interface Link {
    social?: string;
}

interface Member {
    photo: string;
    name: string;
    role: string[];
    linkList: Link[];
}

const props = defineProps<Member>();

</script>