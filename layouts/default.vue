<template>
	<div class="h-s-screen">
		<el-container class="h-full">
			<el-header class="p-block-unset! p-inline-3! h-15! bg-color-77777780">
				<Header />
    		</el-header>
			<el-container class="h-full">
				<el-aside class="w-unset!">
					<MainMenu />
				</el-aside>
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