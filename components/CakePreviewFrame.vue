<template>
    <div class="flex flex-row">
		<div class="flex flex-[3]">
			<div class="w3-content" style="max-width:600px">
                <div>
                    <img v-if="currentDiv==1" class="slide w-full" src="/images/first.png">
                    <img v-else-if="currentDiv==2" class="slide w-full" src="/images/second.png">
                    <img v-else-if="currentDiv==3" class="slide w-full" src="/images/third.png">
                </div>
				<div class="flex flex-row mt-2">
				  <div class="mx-1">
					<img class="rounded-xl opacity-[0.6] hover:opacity-[1]" src="/images/first.png"
                    style="width:100%;cursor:pointer" @click=changeDiv(1)>
				  </div>
				  <div class="mx-1">
					<img class="rounded-xl opacity-[0.6] hover:opacity-[1]" src="/images/second.png"
                    style="width:100%;cursor:pointer" @click="changeDiv(2)">
				  </div>
				  <div class="mx-1">
					<img class="rounded-xl opacity-[0.6] hover:opacity-[1]" src="/images/third.png"
                    style="width:100%;cursor:pointer" @click="changeDiv(3)">
				  </div>
				</div>
			  </div>
		</div>
		<div class="flex flex-[5] flex-row mt-[15%]" style="max-width:500px">
			<img class="h-[17%] w-[17%] mx-5" src="/images/cake1.png" />
			<img class="h-[17%] w-[17%] mx-5" src="/images/cake2.png" />
			<img class="h-[17%] w-[17%] mx-5" src="/images/cake3.png" />
		</div>
	</div>
</template>

<script lang="ts" setup>

import { ref } from 'vue';

const currentDiv = ref(1);

const changeDiv = (n: number) => {
    currentDiv.value = n;
}

</script>

<style scoped>
    .slide {
        box-shadow: -10px -10px 4px rgba(136, 38, 115, 0.4);
    }
</style>