<script setup>
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <div
    class="relative w-full pb-10 pt-10 sm:pb-0 sm:pt-12"
    style="height: 80vh"
  >
    <NuxtImg src="./group.jpg" class="h-full w-full object-cover" />
    <div
      class="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-opacity-50 bg-gradient-to-b from-transparent to-gray-900 px-5"
    >
      <div
        class="mx-auto flex h-full w-full max-w-screen-xl items-center justify-between gap-5 py-4"
      >
        <div class="w-full xl:pb-20 lg:mt-auto">
          <div
            class="flex w-full flex-col items-start justify-between gap-10 lg:flex-row lg:items-center"
          >
            <div
              class="flex w-full flex-col gap-5 sm:gap-7 md:w-[50%] md:gap-10"
            >
              <h1 class="text-4xl font-semibold text-gray-100 md:text-6xl">
                A place for Healing and Resting
              </h1>
              <p class="text-xl text-gray-300">
                Fail a sleep easier and protect your sleep from disturbances
                with Night-buds
              </p>
            </div>
            <div class="flex w-full justify-start md:w-[50%] lg:justify-end">
              <button
                type="button"
                class="lg:h-15 group h-full rounded-xl bg-blue-900 px-2 py-1.5 text-gray-50 hover:bg-blue-800 md:px-4 md:py-3"
                @click="navigateTo('/contact-us')"
              >
                <div class="flex items-center gap-4 sm:gap-7">
                  <span class="font-semibold sm:text-lg md:font-bold"
                    >Talk To Us</span
                  >
                  <ArrowRightIcon
                    class="h-6 w-6 rounded-full bg-gray-100 p-1 text-gray-900 group-hover:bg-gray-200 md:h-9 md:w-9 md:p-2"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
