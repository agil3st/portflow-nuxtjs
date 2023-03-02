<template>
  <section>
    <div class="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
      <h2 class="font-bold text-white text-3xl">From Medium</h2>
      <a class="text-indigo-300 hover:text-indigo-400 px-3 py-1 cursor-pointer">
        View More
      </a>
    </div>
    <div>
      <div
        v-for="article in articles"
        :key="article.id"
        class="grid grid-cols-6 lg:grid-cols-12 gap-3 w-full px-4 pb-4 lg:px-0">
        <ArticleMediumView :article="article" />
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: articles } = await useFetch("/api/articles/medium/get");
console.log(articles);
</script>

<style scoped></style>
