<template>
  <section class="bg-base-200 pb-8">
    <!-- showcase -->
    <div class="flex justify-center items-center pt-12 lg:pt-8">
      <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
      <div
        class="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 w-96 sm:w-auto">
        <div role="main" class="flex flex-col items-center justify-center">
          <h1
            class="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
            My Showcase
          </h1>
          <p
            class="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
            If you're looking for random paragraphs, you've come to the right
            place. When a random word or a random sentence isn't quite enough
          </p>
        </div>
        <div class="lg:flex items-stretch md:mt-12 mt-8">
          <div class="lg:w-full">
            <div
              class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4 lg:gap-8">
              <div
                v-for="showcase in showcases"
                :key="showcase.id"
                class="relative">
                <ShowcaseCardView :showcase="showcase" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end showcase -->
    <!-- pagination -->
    <div class="flex justify-center items-center mt-8">
      <div class="btn-group grid grid-cols-2">
        <button class="btn btn-outline">Previous</button>
        <button class="btn btn-outline">Next</button>
      </div>
    </div>
    <!-- end pagination -->
  </section>
</template>

<script setup>
const { data: showcases } = await useFetch("/api/showcases/get");
</script>

<style scoped></style>
