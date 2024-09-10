<template>
    <div class="">
        <div v-for="mem in showMember">
            <AboutMember
                class="w-[15rem]! h-[25rem]! my-3"
                :name="mem.name"
                :role="mem.role"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue';

interface member {
    name: string;
    role: string[];
}

const showMember = ref<member[]>([
    {
        name: '某某人',
        role: ['網頁前端', '網頁後端', '遊戲開發']
    }
]);

</script>