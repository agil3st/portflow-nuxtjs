<template>
  <div class="bg-base-200 pb-8">
    <HomeLandingHero />

    <HomeContent />
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();
useHead({
  title: "Portflow - Home",
  meta: [
    {
      name: "div",
      content: "Portflow is a simple portfolio web template",
    },
    { name: "keywords", content: "portflow, portfolio, web template" },
  ],
});
</script>
