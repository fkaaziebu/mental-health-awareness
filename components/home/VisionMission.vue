<script setup>
import { initFlowbite } from "flowbite";
import { onMounted } from "vue";

onMounted(() => {
  initFlowbite();
});
</script>
<template>
  <div class="w-full">
    <div
      class="mx-auto flex max-w-screen-xl items-center justify-between gap-5 p-4"
    >
      <div
        class="max-w-full rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800"
      >
        <div class="flex flex-col gap-3">
          <h5 class="font-semibold text-blue-700">Our Vision</h5>
          <h4 class="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
            Empowering Lives Through Education
          </h4>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            eum voluptas repellendus perspiciatis! Incidunt quae sit, labore
            consequuntur rem et?
          </p>
        </div>
      </div>

      <div
        class="max-w-full rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800"
      >
        <div class="flex flex-col gap-3">
          <h5 class="font-semibold text-blue-700">Our Mission</h5>
          <h4 class="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
            Learning for All, Everywhere
          </h4>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            magnam dignissimos sint neque fuga deleniti, labore minus ab
            distinctio eaque?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
