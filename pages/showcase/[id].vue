<template>
  <section class="bg-base-200 pt-20 pb-8">
    <!-- showcase -->
    <div class="max-w-screen-lg mx-auto">
      <div class="mb-4 md:mb-0 w-full lg:w-3/4 mx-auto relative">
        <div class="px-4 lg:px-0">
          <div
            @click="router.back"
            class="btn gap-2 mb-3 bg-transparent border-current-800 hover:bg-transparent hover:text-indigo-400 hover:border-indigo-500">
            <i class="lni lni-arrow-left"></i>
            Back
          </div>
          <h2 class="text-4xl font-semibold leading-tight text-base-800">
            {{ showcase.title }}
          </h2>
        </div>

        <img
          :src="showcase.imageXL"
          class="w-full object-cover lg:rounded mt-8"
          style="height: 28em" />
      </div>

      <div class="px-4 lg:px-0 mt-12 text-lg w-full lg:w-3/4 mx-auto">
        <p class="pb-6">
          {{ showcase.subtitle }}
        </p>

        <div class="lg:flex items-stretch md:my-8 mt-8">
          <div class="lg:w-full">
            <div
              class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
              <div class="sm:w-1/3 sm:mt-0 mt-4">
                <label for="my-modal-4">
                  <img
                    src="https://picsum.photos/id/237/400/400"
                    class="w-full cursor-pointer rounded"
                    alt="chair" />
                </label>
                <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                <label for="my-modal-4" class="modal cursor-pointer">
                  <label class="modal-box relative" for="">
                    <label
                      for="my-modal-4"
                      class="btn btn-sm btn-circle absolute right-2 top-2"
                      >✕</label
                    >
                    <img
                      src="https://picsum.photos/id/237/600/800"
                      class="w-full cursor-pointer rounded"
                      alt="chair" />
                  </label>
                </label>
              </div>
              <div class="sm:w-1/3 sm:mt-0 mt-4">
                <label for="my-modal-5">
                  <img
                    src="https://picsum.photos/id/65/400/400"
                    class="w-full cursor-pointer rounded"
                    alt="chair" />
                </label>
                <input type="checkbox" id="my-modal-5" class="modal-toggle" />
                <label for="my-modal-5" class="modal cursor-pointer">
                  <label class="modal-box relative" for="">
                    <label
                      for="my-modal-5"
                      class="btn btn-sm btn-circle absolute right-2 top-2"
                      >✕</label
                    >
                    <img
                      src="https://picsum.photos/id/65/600/800"
                      class="w-full cursor-pointer rounded"
                      alt="chair" />
                  </label>
                </label>
              </div>
              <div class="sm:w-1/3 sm:mt-0 mt-4">
                <label for="my-modal-6">
                  <img
                    src="https://picsum.photos/id/13/400/400"
                    class="w-full cursor-pointer rounded"
                    alt="chair" />
                </label>
                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <label for="my-modal-6" class="modal cursor-pointer">
                  <label class="modal-box relative" for="">
                    <label
                      for="my-modal-6"
                      class="btn btn-sm btn-circle absolute right-2 top-2"
                      >✕</label
                    >
                    <img
                      src="https://picsum.photos/id/13/600/800"
                      class="w-full cursor-pointer rounded"
                      alt="chair" />
                  </label>
                </label>
              </div>
            </div>
          </div>
        </div>

        <p class="py-6">
          {{ showcase.content }}
        </p>
      </div>
    </div>
    <!-- end showcase -->
    <!-- pagination -->
    <div class="flex justify-center items-center mt-10">
      <div class="btn-group grid grid-cols-2">
        <button class="btn btn-outline">Previous</button>
        <button class="btn btn-outline">Next</button>
      </div>
    </div>
    <!-- end pagination -->
  </section>
</template>

<script setup>
const router = useRouter();
// console.log(useRoute().params);
const { id } = useRoute().params;
// console.log(id);
const { data, error } = await useFetch("/api/showcases/" + id);
const showcase = data.value;
// console.log(data);
</script>

<style scoped></style>
