<template>
  <div>
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
