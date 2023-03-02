<template>
  <section id="overview" class="mt-10">
    <div class="flex mb-4 px-4 lg:px-0 items-center justify-between">
      <h2 class="font-bold text-white text-3xl">Stories</h2>
    </div>
    <div class="grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-0 lg:gap-8">
      <div
        v-for="article in articles"
        :key="article.id"
        class="w-full p-4 lg:p-0">
        <ArticleCardView :article="article" />
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: articles } = await useFetch("/api/articles/get");
</script>

<style scoped></style>
