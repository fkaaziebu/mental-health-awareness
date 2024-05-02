<script setup>
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <div class="w-full pb-10 pt-10 sm:py-10 sm:pb-16">
    <div
      class="mx-auto flex max-w-screen-xl items-center justify-between gap-20 py-4"
    >
      <div class="flex w-full flex-col gap-14">
        <div class="flex flex-col gap-8">
          <h2 class="text-xl font-bold">Our Mission Statement</h2>
          <p class="text-gray-600">
            We're just getting started but our sleeves are rolled up, and we're
            excited to move forward together.
          </p>
          <p class="text-gray-600">
            We have a spirit of giving, and a united purpose of getting actively
            involved in the community, something beyond a donation of money as
            it gives that something extra to those in need
          </p>
        </div>
      </div>
      <div class="w-full">
        <NuxtImg
          class="ml-auto h-60 border border-gray-500 bg-gray-100 object-cover"
          src="/group.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
