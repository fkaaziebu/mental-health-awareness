<script setup>
import { ArrowRightIcon } from "@heroicons/vue/24/outline";

// Composable
import { useActivePage } from "~/composables/useActivePage.js";
const { updateActivePage } = useActivePage();
</script>
<template>
  <div class="w-full pt-10 sm:pb-0 md:pt-20 lg:pt-28 xl:pt-0 px-5 2xl:px-0">
    <div
      class="mx-auto flex max-w-screen-xl flex-col-reverse md:items-center justify-between py-4 md:flex-row"
    >
      <div class="flex flex-col gap-8 md:w-[50%] lg:gap-16">
        <div class="flex w-full flex-col gap-3 lg:gap-6">
          <h2 class="text-4xl lg:text-6xl text-blue-700">Real Life Advice</h2>
          <p class="text-2xl font-bold md:text-4xl lg:text-6xl">Brilliantly Simplified</p>
          <p class="mt-3 text-sm text-gray-500">
            Business Advice, Accounting, Wealth Management, Superannuation,
            Lending
          </p>
        </div>
        <div>
          <button
            type="button"
            class="group rounded-xl w-full md:w-auto bg-gray-800 px-4 py-3 text-gray-50 hover:bg-gray-900"
            @click="[updateActivePage('/contact-us'), navigateTo('/contact-us')]"
          >
            <div class="flex items-center gap-7 w-full md:w-auto justify-between md:justify-normal">
              <span class="text-lg font-bold">Talk To Us</span>
              <ArrowRightIcon
                class="h-9 w-9 rounded-full bg-gray-100 p-2 text-gray-900 group-hover:bg-gray-200"
              />
            </div>
          </button>
        </div>
      </div>
      <div class="flex md:h-60 lg:h-full text-right w-full md:w-[50%]">
        <Vue3Lottie
          :animationLink="`https://lottie.host/5567fa42-7798-44c7-8743-8f5fee317f14/PL1tZq9kG1.json`"
          :width="`100%`"
        />
      </div>
    </div>
  </div>
</template>
