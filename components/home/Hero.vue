<script setup>
import { ArrowRightIcon } from "@heroicons/vue/24/outline";

// Composable
import { useActivePage } from "~/composables/useActivePage.js";
const { updateActivePage } = useActivePage();
</script>
<template>
  <div
    class="relative w-full pt-10 sm:pt-12"
    style="height: 80vh"
  >
    <NuxtImg src="https://mental-health-ngo.s3.eu-north-1.amazonaws.com/group.jpg" class="h-full w-full object-cover" />
    <div
      class="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-opacity-60 bg-gray-900 px-5"
    >
      <div
        class="mx-auto flex h-full w-full max-w-screen-xl items-center justify-between gap-5 py-4"
      >
        <div class="w-full lg:mt-auto lg:pb-20 xl:pb-20">
          <div
            class="flex w-full flex-col items-start justify-between gap-10 lg:flex-row lg:items-center"
          >
            <div
              class="flex w-full flex-col gap-5 sm:gap-7 md:w-[50%] md:gap-10"
            >
              <h1 class="text-4xl font-semibold text-gray-100 md:text-6xl lg:text-4xl xl:text-6xl">
                A place for Healing and Resting
              </h1>
              <p class="text-xl text-gray-300">
                Fail a sleep easier and protect your sleep from disturbances
                with Night-buds
              </p>
            </div>
            <div class="flex mt-36 md:mt-0 w-full justify-start md:w-[50%] lg:justify-end">
              <button
                type="button"
                class="group rounded-xl w-full md:w-auto bg-gray-800 px-4 py-3 text-gray-50 hover:bg-gray-900"
                @click="
                  [updateActivePage('/contact-us'), navigateTo('/contact-us')]
                "
              >
                <div class="flex items-center gap-7 w-full md:w-auto justify-between md:justify-normal">
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
