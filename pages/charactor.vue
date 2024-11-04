<template>
	<div class="w-full">
		<div class="w-full flex flex-col items-center my-[10px]">
			<h1 class="text-4xl my-2 text-[#de7aca]">Charactor</h1>
			<div class="md:w-full w-40 h-1 bg-[#de7aca] md:mx-25"></div>
		</div>
		<CharactorSelect class="mt-5" @toggle="handleToggle"></CharactorSelect>
		<div v-for="chara in CharaList" key="chara.index">
			<CharactorInfo
				v-if="currentPanel === chara.panel"
				class="mb-[3%] pb-[18%] lg:pb-[3%] w-full"
				:maincolor="chara.maincolor"
				:image="chara.image"
				:name="chara.name"
				:age="chara.age"
				:starSign="chara.starSign"
				:club="chara.club"
				:hobbies="chara.hobbies"
				:info="chara.info"
				:subInfo="chara.subInfo"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentPanel = ref<string>('1');

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
	panel: string;
}

const CharaList: CharaInfo[] = [
	{
		maincolor: '#EA99B8',
		image: '/images/1.png',
		name: '紅月 茜',
		age: '16歲，高一生',
		starSign: '獅子座',
		club: '園藝社',
		hobbies: '多肉植物',
		info: '樂觀開朗的元氣少女，從國中開始就與你同班。<br>雖然很喜歡栽培，但卻意外地連多肉植物都養不活。<br>性格自來熟的她與你不同，在剛升上高一時，就交到了許多好友。<br>由於對誰都十分友善，因此在班上深受歡迎。',
		subInfo: '不過，在看似交際能力優秀的外表下，<br>茜似乎也有屬於自己的另外一面……？',
		panel: '1'
	},
	{
		maincolor: '#F2DB92',
		image: '/images/2.png',
		name: '朝日奈 胡桃',
		age: '14歲，高一生',
		starSign: '天秤座',
		club: '烹飪社',
		hobbies: '戚風蛋糕',
		info: '就在隔壁班的胡桃是學校裡人人皆知的天才少女，也是保健室的常客。<br>喜歡烹飪的她對西式甜點情有獨鍾，不過卻因為身體原因，無法和大家一起參與社團活動。<br>作為知名政治家的孫女，胡桃真實的模樣鮮為人知。<br>在和人相處時，也總有一股淡淡的疏離感。',
		subInfo: '不過這樣的胡桃，<br>卻也似乎對你格外親暱？',
		panel: '2'
	},
	{
		maincolor: '#A281BC',
		image: '/images/3.png',
		name: '天井 薰',
		age: '17歲，高二生',
		starSign: '摩羯座',
		club: '科學社',
		hobbies: '自己一個人的實驗',
		info: '高二的學姊，薰，是學校實驗室的「地縛靈」。身為科學社社長的她，<br>身上總是帶著奇妙的甜味，對理科有著異常的天賦與狂熱。<br>對理科有著異常的天賦與狂熱。雖然平時總是面無表情，<br>但只要談論到科學或喜歡的水果糖品牌，薰就會立刻滔滔不絕。',
		subInfo: '面對在無意中結識的你，<br>她會如何展現出自己內心的那一面呢？請好好期待吧！',
		panel: '3'
	},
	{
		maincolor: '#80ADE1',
		image: '/images/4.png',
		name: '杉野 榛',
		age: '18歲，高三生',
		starSign: '金牛座',
		club: '學生會',
		hobbies: '推理小說',
		info: '榛是學生會的副會長，認真負責的她總是被迫承擔起不負責任會長遺留下來的業務，在學業與學生會事務間忙得焦頭爛額。<br>不過，就算常常因為疲勞而打瞌睡，在有空閒時，<br>熱愛推理小說的榛還是會抽空去圖書館借、還書。',
		subInfo: '如果想要和榛打好關係的話，<br>就試著和她聊聊她最喜歡的推理小說全集吧！',
		panel: '4'
	},
	{
		maincolor: '#8D3945',
		image: '/images/5.png',
		name: '白雪 楓',
		age: '19歲，高三生',
		starSign: '天蠍座',
		club: '無',
		hobbies: '熔岩巧克力蛋糕',
		info: '擁有一半法國血統的楓是學校裡最年長的學姊。<br>由於幼時曾在國外留學的緣故，她的年齡比同屆人還大上一歲。<br>說著一口流利外語的楓總是笑瞇瞇的，對喜愛的對象也會毫不猶豫地用擁抱與親吻臉頰來表示好感。',
		subInfo: '但不知為何，當你與白雪學姊相處時，<br>總覺得她的視線有些可怕……？',
		panel: '5'
	},
	{
		maincolor: '#A7D090',
		image: '/images/6.png',
		name: '小鳥遊 邊瑠',
		age: '17歲，高二生',
		starSign: '水瓶座',
		club: '弓道社',
		hobbies: '運動',
		info: '個性大剌剌的邊瑠是劍道社的王牌隊員，代表學校拿下了多項獎項。<br>但或許是不太擅長與人相處的緣故，她總是無法坦誠地吐露自己的心聲，<br>甚至與自己從小到大的朋友產生了誤會。<br>在比賽場上無人披敵的她，卻主動找上你，希望能學習與人相處的辦法。',
		subInfo: '而究竟該怎麼幫助她，<br>就先從與邊瑠建立關係開始吧！',
		panel: '6'
	}
]

const handleToggle = (value: string) => {
	currentPanel.value = value;
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&family=Zen+Maru+Gothic&display=swap');

h1 {
    font-family: "Playwrite GB S", cursive;
}
</style>