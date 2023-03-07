<template>
  <section class="px-4 lg:px-0">
    <div class="flex pt-16 mb-4 items-center justify-between">
      <h2 class="font-bold text-white text-3xl">Recent Works</h2>
      <NuxtLink
        to="showcase"
        class="text-indigo-300 hover:text-indigo-400 px-3 py-1 cursor-pointer">
        View All
      </NuxtLink>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
      <div v-for="(showcase, index) in showcases" :key="index">
        <img :src="showcase.image" alt="" class="rounded-lg" />
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: showcases } = await useFetch("/api/showcases/latest");
</script>

<style lang="scss" scoped></style>
