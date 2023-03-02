import { StoriesContent } from '../.nuxt/components';
<template>
  <section class="bg-base-200">
    <div class="max-w-screen-lg mx-auto pt-20 pb-8">
      <!-- search bar -->
      <ArticleSearchBar class="mb-4" />
      <!-- end search bar -->
      <!-- top pagination -->
      <StoriesPagination />
      <!-- end top pagination -->
      <!-- recent posts -->
      <StoriesContent />
      <!-- end recent posts -->
      <!-- pagination -->
      <StoriesPagination class="mt-14" />
      <!-- end pagination -->
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
