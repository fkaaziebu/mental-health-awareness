<script setup>
import { ArrowRightIcon } from "@heroicons/vue/24/outline";

// Composable
import { useActivePage } from "~/composables/useActivePage.js";
const { updateActivePage } = useActivePage();
</script>
<template>
  <div class="w-full px-5 pt-10 sm:pb-0 md:pt-20 lg:pt-28 xl:pt-20 2xl:px-0">
    <div
      class="mx-auto flex max-w-screen-xl flex-col-reverse justify-between py-4 md:flex-row md:items-center"
    >
      <div class="flex flex-col gap-8 md:w-[50%] lg:gap-16">
        <div class="flex w-full flex-col gap-3 lg:gap-6">
          <h2 class="text-4xl text-blue-700 lg:text-6xl">Real Life Advice</h2>
          <p class="text-2xl font-bold md:text-4xl lg:text-6xl">
            Brilliantly Simplified
          </p>
          <p class="mt-3 text-sm text-gray-500">
            Business Advice, Accounting, Wealth Management, Superannuation,
            Lending
          </p>
        </div>
        <div>
          <button
            type="button"
            class="group w-full rounded-xl bg-gray-800 px-4 py-3 text-gray-50 hover:bg-gray-900 md:w-auto"
            @click="
              [updateActivePage('/contact-us'), navigateTo('/contact-us')]
            "
          >
            <div
              class="flex w-full items-center justify-between gap-7 md:w-auto md:justify-normal"
            >
              <span class="text-lg font-bold">Talk To Us</span>
              <ArrowRightIcon
                class="h-9 w-9 rounded-full bg-gray-100 p-2 text-gray-900 group-hover:bg-gray-200"
              />
            </div>
          </button>
        </div>
      </div>
      <div class="flex w-full text-right md:h-60 md:w-[50%] lg:h-full">
        <Vue3Lottie
          :animationLink="`https://lottie.host/44e7191e-a95d-4405-ab3d-4270e336e5f3/0ZfBXpiEOJ.json`"
          :width="`100%`"
        />
      </div>
    </div>
  </div>
</template>
