<template>
	<div class="h-s-screen">
		<el-container class="h-full">
			<el-header class="h-[130px]! mx-[5%]! pt-[20px]!">
				<Header />
    		</el-header>
			<el-container class="h-full">
				<el-container class="main-continaer">
					<NuxtPage />
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>

<script setup>
</script>

<style scope>
.el-menu.el-menu--collapse {
	width: 300px;
}

.el-menu {
	width: 64px;
}
</style>