<template>
    <div class="flex lg:flex-row flex-col">
		<div class="flex flex-[3] mb-[10%] lg:mr-[1%]">
			<div>
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
		<div class="flex flex-[3] flex-row w-full lg:justify-center justify-around lg:ml-[1%]">
			<iframe class="w-full h-[500px] lg:max-h-[400px] mb-[10%] max-h-[700px]"
				src="https://www.youtube.com/embed/dQw4w9WgXcQ"
				frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen>
			</iframe>
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