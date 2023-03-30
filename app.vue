<template>
  <div class="h-screen w-full flex justify-center items-center">
    <h1 class="font-bold text-2xl">hello, world!</h1>
  </div>
</template>
<script setup lang="ts">
const { data, pending, refresh } = await useAsyncData(async () => {
 return "hello, world!"
  })
  onMounted(() => console.log("Hello, world!"))
</script>
