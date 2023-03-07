<template>
  <section>
    <div class="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
      <h2 class="font-bold text-white text-3xl">From Medium</h2>
      <a class="text-indigo-300 hover:text-indigo-400 px-3 py-1 cursor-pointer">
        View More
      </a>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-6">
      <div
        v-for="article in articles"
        :key="article.id"
        class="w-full px-4 pb-4 lg:px-0">
        <ArticleMediumView :article="article" />
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: articles } = await useFetch("/api/articles/medium/get");
// console.log(articles);
</script>

<style scoped></style>
