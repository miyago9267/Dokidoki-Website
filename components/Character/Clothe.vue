<template>
    <div class="w-full flex flex-row justify-around">
        <div v-for="(clothe) in clothesEntries" @click="changeClothes(clothe[1])"
        class="flex items-center justify-center md:w-1/4 md:h-12 w-1/5 h-8  bg-[#e17495] hover:bg-[#c75d7e] rounded-2xl text-2xl font-bold  text-center py-2 px-4">
            {{ clothe[0] }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Clothe } from "~/types/about/types";

const props = defineProps<{ clothe: Clothe }>();
const emit = defineEmits<{ (event: 'toggle', clothe: string): void }>();
const clothesEntries = ref(Object.entries(props.clothe));
const changeClothes = (clothe: string) => {
    emit("toggle", clothe);
}
</script>