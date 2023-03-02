<template>
  <section class="bg-base-200 pt-20 pb-8">
    <div class="hero min-h-screen">
      <div
        class="hero-content flex-col lg:flex-row max-w-screen-lg mx-auto lg:mt-0">
        <img
          src="https://i.pravatar.cc/500?img=1"
          class="max-w-sm rounded-lg shadow-2xl" />
        <div class="p-1 lg:ml-6">
          <h1 class="text-2xl font-bold">Let's discuss something!</h1>
          <p class="py-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
            corrupti nesciunt nam ad pariatur cum sapiente illo debitis qui
            laborum!
          </p>
          <div class="mt-3 space-y-3 lg:space-y-2">
            <input
              type="text"
              placeholder="John Who"
              class="input input-bordered rounded-md text-sm w-full bg-gray-800 border-gray-600" />
            <input
              type="email"
              placeholder="john@mail.com"
              class="input input-bordered rounded-md text-sm w-full bg-gray-800 border-gray-600" />
            <textarea
              class="textarea textarea-bordered rounded-md text-sm p-3 w-full bg-gray-800 border-gray-600"
              placeholder="Write some message for me..."></textarea>
            <button class="btn btn-primary">Send To Me</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
