<script setup>
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <div class="w-full pb-10 pt-10 sm:pb-0 sm:pt-28">
    <div
      class="mx-auto flex max-w-screen-xl flex-col-reverse items-center justify-between py-4 sm:flex-row"
    >
      <div class="flex flex-col gap-4 sm:w-[50%] sm:gap-16">
        <div class="flex w-full flex-col gap-6">
          <h2 class="text-6xl text-blue-700">Real Life Advice</h2>
          <p class="text-2xl font-bold sm:text-6xl">Brilliantly Simplified</p>
          <p class="mt-3 text-sm text-gray-500">
            Business Advice, Accounting, Wealth Management, Superannuation,
            Lending
          </p>
        </div>
        <div>
          <button
            type="button"
            class="group rounded-xl bg-gray-800 px-4 py-3 text-gray-50 hover:bg-gray-900"
            @click="navigateTo('/contact-us')"
          >
            <div class="flex items-center gap-5">
              <span class="text-lg font-bold">Talk To Us</span>
              <ArrowRightIcon
                class="h-9 w-9 rounded-full bg-gray-100 p-2 text-gray-900 group-hover:bg-gray-200"
              />
            </div>
          </button>
        </div>
      </div>
      <div class="flex h-full text-right sm:w-[50%]">
        <Vue3Lottie
          :animationLink="`https://lottie.host/f56b862f-d70d-45d4-95f1-ad4e580504e2/6JA0xvKGaG.json`"
          :width="`80%`"
        />
      </div>
    </div>
  </div>
</template>
