<template>
  <div class="col-span-4 lg:col-span-9 flex flex-col">
    <a href="">
      <div
        class="font-bold text-lg lg:text-2 pt-1 line-clamp-2 lg:line-clamp-3">
        {{ article.title }}
      </div>
    </a>

    <div
      class="font-light text-sm lg:text-lg pt-2 line-clamp-2 lg:line-clamp-5">
      {{ article.shortContent }}
    </div>
  </div>

  <div class="col-span-2 lg:col-span-3 flex items-center">
    <a href="">
      <img :src="article.image" class="rounded w-full" />
    </a>
  </div>
</template>

<script setup>
const { article } = defineProps(["article"]);
</script>

<style scoped></style>
