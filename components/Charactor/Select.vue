<template>
    <div class="flex justify-center">
        <div class="grid grid-cols-3 lg:grid-cols-6 gap-2">
            <div v-for="chara in SelectBar"
                class="flex lg:w-55 lg:h-55 md:w-50 md:h-50 w-33 h-33 relative overflow-hidden opacity-[0.8] hover:opacity-[1] cursor-pointer justify-center"
                :style="{ backgroundColor: chara.color }"
                @click="chara.controll_panel && togglePanelActive(chara.controll_panel)"
            >
                <img :src="chara.image" alt="" class="absolute lg:w-70 md:w-60 w-50">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { defineEmits } from 'vue';

interface CharaHead {
    color: string;
    image: string;
    controll_panel?: string;
}

interface TabEmits {
    (event: 'toggle', value: string): void;
}

const SelectBar: CharaHead[] = [
    {
        color: '#EA99B8',
        image: '/images/1.png',
        controll_panel: '1'
    },
    {
        color: '#F2DB92',
        image: '/images/2.png',
        controll_panel: '2'
    },
    {
        color: '#A281BC',
        image: '/images/3.png',
        controll_panel: '3'
    },
    {
        color: '#80ADE1',
        image: '/images/4.png',
        controll_panel: '4'
    },
    {
        color: '#8D3945',
        image: '/images/5.png',
        controll_panel: '5'
    },
    {
        color: '#A7D090',
        image: '/images/6.png',
        controll_panel: '6'
    }
]

const emit = defineEmits<TabEmits>();

const togglePanelActive = (value: string) => {
  emit('toggle', value);
}

</script>