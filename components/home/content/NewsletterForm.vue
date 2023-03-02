<template>
  <section>
    <div class="flex mt-5 lg:mt-14">
      <img
        src="https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
        class="w-0 md:w-1/4 object-cover rounded-l" />
      <div class="px-4 py-4 lg:px-12">
        <h3 class="text-2xl lg:text-3xl text-gray-200 font-bold lg:mt-5">
          Subscribe my newsletter!
        </h3>
        <p class="text-sm text-gray-300">
          I will send latest collection shot and post once in every week, fresh
          from the oven.
        </p>
        <form class="mt-4 mb-3 space-x-2">
          <input
            type="email"
            class="rounded bg-gray-100 px-4 py-2 border focus:border-indigo-400"
            placeholder="john@tech.com" />
          <button
            class="px-4 py-2 rounded border border-indigo-600 bg-indigo-600 text-gray-100">
            Subscribe
            <i class="bx bx-right-arrow-alt"></i>
          </button>
        </form>
        <p class="text-indigo-200 opacity-50 text-sm">No spam. I promise</p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
