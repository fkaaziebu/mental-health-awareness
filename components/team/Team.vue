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
      class="mx-auto flex max-w-screen-xl items-center justify-between gap-5 pb-16 pt-4"
    >
      <div class="flex w-full flex-col gap-5 sm:gap-8">
        <h2 class="font-semibold text-blue-700">Meet the Team</h2>
        <h3 class="sm:w-[50%] text-2xl font-semibold">
          Meet Our Dedicated Team of Educators and Innovators
        </h3>
        <div class="grid sm:grid-cols-3 items-center justify-center gap-4">
          <div class="max-w-full rounded-lg bg-white dark:bg-gray-800">
            <div class="flex flex-col gap-5">
              <div>
                <NuxtImg
                  class="h-60 w-full max-w-full bg-gray-100 rounded-lg object-cover"
                  src="/person.jpg"
                  alt=""
                />
              </div>
              <div class="flex flex-col gap-3">
                <h4 class="text-lg font-semibold">Frederick Kwame Aziebu</h4>
                <span class="font-medium italic">Chairman</span>
              </div>
            </div>
          </div>
          <div class="max-w-full rounded-lg bg-white dark:bg-gray-800">
            <div class="flex flex-col gap-5">
              <div>
                <NuxtImg
                  class="h-60 w-full max-w-full bg-gray-100 rounded-lg object-cover"
                  src="/person-2.jpg"
                  alt=""
                />
              </div>
              <div class="flex flex-col gap-3">
                <h4 class="text-lg font-semibold">Frederick Kwame Aziebu</h4>
                <span class="font-medium italic">Chairman</span>
              </div>
            </div>
          </div>
          <div class="max-w-full rounded-lg bg-white dark:bg-gray-800">
            <div class="flex flex-col gap-5">
              <div>
                <NuxtImg
                  class="h-60 w-full max-w-full bg-gray-100 rounded-lg object-cover"
                  src="/person-3.jpg"
                  alt=""
                />
              </div>
              <div class="flex flex-col gap-3">
                <h4 class="text-lg font-semibold">Frederick Kwame Aziebu</h4>
                <span class="font-medium italic">Chairman</span>
              </div>
            </div>
          </div>
          <div class="max-w-full rounded-lg bg-white dark:bg-gray-800">
            <div class="flex flex-col gap-5">
              <div>
                <NuxtImg
                  class="h-60 w-full max-w-full bg-gray-100 rounded-lg object-cover"
                  src="/person-4.jpg"
                  alt=""
                />
              </div>
              <div class="flex flex-col gap-3">
                <h4 class="text-lg font-semibold">Frederick Kwame Aziebu</h4>
                <span class="font-medium italic">Chairman</span>
              </div>
            </div>
          </div>
          <div class="max-w-full rounded-lg bg-white dark:bg-gray-800">
            <div class="flex flex-col gap-5">
              <div>
                <NuxtImg
                  class="h-60 w-full max-w-full bg-gray-100 rounded-lg object-cover"
                  src="/person-5.jpg"
                  alt=""
                />
              </div>
              <div class="flex flex-col gap-3">
                <h4 class="text-lg font-semibold">Frederick Kwame Aziebu</h4>
                <span class="font-medium italic">Chairman</span>
              </div>
            </div>
          </div>
          <div class="max-w-full rounded-lg bg-white dark:bg-gray-800">
            <div class="flex flex-col gap-5">
              <div>
                <NuxtImg
                  class="h-60 w-full max-w-full bg-gray-100 rounded-lg object-cover"
                  src="/person-6.jpg"
                  alt=""
                />
              </div>
              <div class="flex flex-col gap-3">
                <h4 class="text-lg font-semibold">Frederick Kwame Aziebu</h4>
                <span class="font-medium italic">Chairman</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
