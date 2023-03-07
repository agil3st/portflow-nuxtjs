<template>
  <section class="px-4 lg:px-0">
    <div class="flex pt-16 mb-4 items-center justify-between">
      <h2 class="font-bold text-white text-3xl">Recent Work</h2>
      <NuxtLink
        to="showcase"
        class="text-indigo-300 hover:text-indigo-400 px-3 py-1 cursor-pointer">
        View All
      </NuxtLink>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
      <div class="">
        <img
          src="https://picsum.photos/id/12/500/500"
          alt=""
          class="rounded-lg" />
      </div>
      <div class="">
        <img
          src="https://picsum.photos/id/12/500/500"
          alt=""
          class="rounded-lg" />
      </div>
      <div class="">
        <img
          src="https://picsum.photos/id/12/500/500"
          alt=""
          class="rounded-lg" />
      </div>
      <div class="">
        <img
          src="https://picsum.photos/id/12/500/500"
          alt=""
          class="rounded-lg" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
