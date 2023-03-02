<template>
  <div>
    <div class="mx-auto">
      <!-- Navbar -->
      <Header />
      <!-- End of Navbar -->
      <!-- Content -->
      <slot />
      <!-- End of Content -->
      <!-- Footer -->
      <Footer />
      <!-- End of Footer -->
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Portflow x Nuxt.js",
  meta: [
    {
      name: "description",
      content: "Portflow is a simple portfolio web template",
    },
    { name: "keywords", content: "portflow, portfolio, web template" },
  ],
});
</script>

<style scoped></style>
