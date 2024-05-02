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
      class="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-opacity-50 bg-gradient-to-b from-transparent to-gray-900"
    >
      <div
        class="mx-auto flex h-full w-full max-w-screen-xl items-center justify-between gap-5 py-4"
      >
        <div class="mt-auto w-full pb-20">
          <div class="flex w-full items-center justify-between">
            <div class="flex w-[50%] flex-col gap-10">
              <h1 class="text-2xl font-semibold text-gray-100 sm:text-6xl">
                Easy relaxation using Nightbuds
              </h1>
              <p class="text-xl text-gray-300">
                Fail a sleep easier and protect your sleep from disturbances
                with Night-buds
              </p>
            </div>
            <div class="flex w-[50%] justify-end">
              <button
                type="button"
                class="h-15 group rounded-xl bg-blue-900 px-4 py-3 text-gray-50 hover:bg-blue-800"
                @click="navigateTo('/contact-us')"
              >
                <div class="flex items-center gap-7">
                  <span class="text-lg font-bold">Talk To Us</span>
                  <ArrowRightIcon
                    class="h-9 w-9 rounded-full bg-gray-100 p-2 text-gray-900 group-hover:bg-gray-200"
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
