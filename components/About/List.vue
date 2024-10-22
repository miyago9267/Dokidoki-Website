<template>
    <div class="w-full ">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
            <AboutMember
                v-for="mem in showMember"
                class="w-[15rem]! h-[25rem]! my-3 "
                :photo="mem.photo"
                :name="mem.name"
                :role="mem.role"
                :linkList="mem.linkList"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue';

interface Link {
    social?: string;
}

interface Member {
    photo: string;
    name: string;
    role: string[];
    linkList: Link[];
}

const showMember = ref<Member[]>([
    {
        photo: 'https://drive.miyago9267.com/d/file/img/mygo/%E6%88%91%E4%B9%9F%E4%B8%80%E6%A8%A3.jpg?t=1729564080395',
        name: '統籌',
        role: ['專案統籌'],
        linkList: [
            {'social': 'https://github.com'}
        ]
    },
    {
        photo: 'https://drive.miyago9267.com/d/file/img/mygo/%E5%A6%B3%E6%98%AF%E4%BE%86%E6%89%BE%E6%88%91%E5%90%B5%E6%9E%B6%E7%9A%84%E5%97%8E.jpg?t=1729584516644',
        name: '總監',
        role: ['專案總監'],
        linkList: []
    },
    {
        photo: 'https://drive.miyago9267.com/d/file/img/mygo/%E9%80%99%E7%AE%97%E4%BB%80%E9%BA%BC.jpg?t=1729584516644',
        name: '美宣公關',
        role: ['行銷公關'],
        linkList: []
    },
    {
        photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        name: '社群經理',
        role: ['社群企劃'],
        linkList: []
    },
    {
        photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        name: '平面設計A',
        role: ['平面設計'],
        linkList: []
    },
    {
        photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        name: '平面設計B',
        role: ['平面設計'],
        linkList: []
    },
    {
        photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        name: '平面設計C',
        role: ['平面設計'],
        linkList: []
    },
    {
        photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        name: '萬能阿軟',
        role: ['互動設計'],
        linkList: []
    },
    {
        photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        name: '互動設計B',
        role: ['互動設計'],
        linkList: []
    },
    {
        photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        name: '互動設計C',
        role: ['互動設計'],
        linkList: []
    },
    {
        photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        name: '影像企劃',
        role: ['影像企劃'],
        linkList: []
    }
]);

</script>