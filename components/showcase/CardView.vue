<template>
  <div>
    <p
      class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
      {{ showcase.date }}
    </p>
    <div class="absolute bottom-0 left-0 p-6">
      <h2 class="text-xl font-semibold 5 text-white">{{ showcase.title }}</h2>
      <p class="text-base leading-4 text-white mt-2">{{ showcase.subtitle }}</p>
      <NuxtLink
        :to="`/showcase/${showcase.id}`"
        class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
        <p class="pr-2 text-sm font-medium leading-none">Read More</p>
        <svg
          class="fill-stroke"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.75 12.5L10.25 8L5.75 3.5"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </NuxtLink>
    </div>
  </div>
  <NuxtLink :to="`/showcase/${showcase.id}`">
    <img :src="showcase.image" class="w-full rounded" alt="chair" />
  </NuxtLink>
</template>

<script setup>
const { showcase } = defineProps(["showcase"]);
</script>

<style scoped></style>
