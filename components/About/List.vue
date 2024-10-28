<template>
    <div class="w-full ">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-3 place-items-center">
            <AboutMember
                v-for="mem in showMember"
                class="w-[15rem]! h-[25rem]! my-3 "
                :photo="mem.photo"
                :name="mem.name"
                :role="mem.role"
                :linkList="mem.linkList || {}"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue';
import type { Member } from '~/types/about/types'


const showMember = ref<Member[]>([
    {
        photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        name: '余旻真',
        role: ['專案統籌'],
        linkList: {
        }
    },
    {
        photo: '/images/member_avatar/avatar2.png',
        name: 'セラ',
        role: ['專案總監'],
        linkList: {
            'youtube': 'https://www.youtube.com/@HaitoSara_Yuxi',
            'twitter': 'https://x.com/haito_sara',
            'ig': 'https://www.instagram.com/haito_sara/',
        }
    },
    {
        photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        name: '凡勤',
        role: ['行銷公關'],
        linkList: {
            'ig': 'https://www.instagram.com/redlotus_1413/profilecard/?igsh=aWVpZzYxdDF6eDRq',
            'plurk': 'https://www.plurk.com/jennt1413121'
        }
    },
    {
        photo: '/images/member_avatar/avatar7.png',
        name: '辰',
        role: ['社群企劃'],
        linkList: {
            'tiktok': 'https://www.tiktok.com/@chen_xin_12?_t=8qkUz3ZHKLP&_r=1'
        }
    },
    {
        photo: '/images/member_avatar/avatar3.png',
        name: '夏語寒',
        role: ['平面設計'],
        linkList: {
            'ig': 'https://www.instagram.com/xia.yu.han_51?igsh=aXBmZGN2dnNldW9i&utm_source=qr'
        }
    },
    {
        photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        name: '柏苒一棵樹',
        role: ['平面設計'],
        linkList: {
            'facebook': 'https://www.facebook.com/profile.php?id=100028325873632&mibextid=ZbWKwL',
            'plurk': 'https://www.plurk.com/induskailar'
        }
    },
    {
        photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        name: '楊雅鈞',
        role: ['平面設計'],
        linkList: {}
    },
    {
        photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        name: '阿軟',
        role: ['互動設計'],
        linkList: {
            'twitch': 'https://www.twitch.tv/soft_0101',
            'ig': 'https://www.instagram.com/revolver_0101/'
        }
    },
    {
        photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        name: '阿狼',
        role: ['互動設計'],
        linkList: {
            'youtube': 'https://youtube.com/channel/UCreSshHGi8CPrWPU1RwmWew?si=IWhe4e4FW5LNVTRD',
            'ig': 'https://www.instagram.com/shyine_wolf/'
        }
    },
    {
        photo: '/images/member_avatar/avatar4.png',
        name: '丸子',
        role: ['互動設計'],
        linkList: {
            'youtube': 'https://youtube.com/@wanzi_07?si=iG17BufRAoSJJDoh'
        }
    },
    {
        photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        name: '影像企劃',
        role: ['影像企劃'],
        linkList: {}
    }
]);

</script>