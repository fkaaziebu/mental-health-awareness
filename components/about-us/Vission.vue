<script setup>
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <div class="w-full px-5 pb-10 sm:pb-16 md:py-10 2xl:px-0">
    <div
      class="mx-auto flex max-w-screen-xl flex-col-reverse items-center justify-between gap-10 py-4 lg:flex-row-reverse lg:gap-20"
    >
      <div class="flex w-full flex-col gap-14">
        <div class="flex flex-col gap-8 md:gap-4 lg:gap-8">
          <h2 class="text-xl font-bold">Our Vission Statement</h2>
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
          class="mr-auto h-60 w-full border border-gray-500 bg-gray-100 object-cover lg:w-auto"
          src="https://mental-health-ngo.s3.eu-north-1.amazonaws.com/group.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
