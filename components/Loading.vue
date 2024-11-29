<template>
    <div class="fixed inset-0 bg-white flex items-center justify-center z-50" v-if="show">
    <div class="flex flex-col items-center">
        <img src="/images/doki11.png" alt="Logo" class="md:w-[30%] w-[65%] animate-bounce" />
    </div>
    </div>
</template>

<script lang="ts" setup>
const show = ref(true)

onMounted(() => {
  setTimeout(() => {
    show.value = false
  }, 2000)
})
</script>

<style lang="css" scoped>
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}
</style>