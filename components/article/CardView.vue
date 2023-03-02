<template>
  <div>
    <img :src="article.image" class="rounded" alt="technology" />
    <div class="p-4 pl-0">
      <h2 class="font-bold text-2xl text-white line-clamp-2">
        {{ article.title }}
      </h2>
      <p class="text-gray-300 mt-2 line-clamp-3">
        {{ article.shortContent }}
      </p>

      <NuxtLink
        :to="`/stories/${article.id}`"
        class="btn bg-indigo-600 hover:bg-indigo-700 border-none py-2 rounded text-indigo-200 mt-2 ml-auto">
        Read more
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { article } = defineProps(["article"]);
</script>

<style scoped></style>
