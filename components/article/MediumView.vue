<template>
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-4 flex items-center">
      <a href="">
        <img :src="article.image" class="rounded w-full" />
      </a>
    </div>
    <div class="col-span-8 flex flex-col">
      <a href="">
        <div
          class="font-bold text-lg lg:text-2 pt-2 line-clamp-2 lg:line-clamp-2">
          {{ article.title }}
        </div>
        <div
          class="font-light text-sm lg:text-lg pt-2 line-clamp-2 lg:line-clamp-2">
          {{ article.shortContent }}
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
const { article } = defineProps(["article"]);
</script>

<style scoped></style>
