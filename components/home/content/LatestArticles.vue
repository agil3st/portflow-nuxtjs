<template>
  <section>
    <div class="flex pt-16 mb-4 px-4 lg:px-0 items-center justify-between">
      <h2 class="font-bold text-white text-3xl">Latest Articles</h2>
      <a
        href="stories.html"
        class="text-indigo-300 hover:text-indigo-400 px-3 py-1 cursor-pointer">
        View All
      </a>
    </div>
    <div class="block space-x-0 lg:flex lg:space-x-6 px-4 lg:px-0">
      <div v-for="article in articles" :key="article.id" class="w-full">
        <ArticleCardView :article="article" />
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: articles } = await useFetch("/api/articles/latest");
// console.log(articles);
</script>

<style scoped></style>
