<template>
	<div class="relative">
		<Loading v-if="!isAppLoaded"/>
		<div class="min-h-screen bg-[#F6F1F1] relative" v-if="isAppLoaded">
			<el-container class="h-full relative">
				<el-header class="h-[90px]! mx-[5%]! pt-[20px]! z-[1000]">
					<Header />
				</el-header>
				<el-container class="main-continaer">
					<NuxtPage />
				</el-container>
				<el-footer class="w-screen z-[1000]">
					<Footer />
				</el-footer>
			</el-container>
		</div>
	</div>
</template>

<script setup>
import { useState } from '#app'

const isAppLoaded = useState('isAppLoaded', () => false)

if (!isAppLoaded.value) {
  setTimeout(() => {
    isAppLoaded.value = true
  }, 2000)
}
</script>

<style scope>
.el-menu.el-menu--collapse {
	width: 300px;
}

.el-menu {
	width: 64px;
}

.el-footer {
	padding: 0;
}
</style>