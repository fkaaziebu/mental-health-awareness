<script setup>
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <div class="w-full px-5 pb-10 pt-10 sm:py-10 2xl:px-0">
    <div
      class="mx-auto flex max-w-screen-xl flex-col-reverse items-center justify-between gap-10 lg:gap-20 py-4 lg:flex-row"
    >
      <div class="flex w-full flex-col gap-14">
        <div class="flex flex-col gap-8">
          <h2 class="hidden text-2xl font-semibold text-gray-900 lg:block">
            A Peek Inside the Culture
          </h2>
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
        <div>
          <button
            data-modal-target="default-modal"
            data-modal-toggle="default-modal"
            type="button"
            class="group rounded-xl bg-gray-800 px-4 py-3 text-gray-50 hover:bg-gray-900"
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
      <div class="flex flex-col gap-8">
        <h2 class="block text-2xl font-semibold text-gray-900 lg:hidden">
          A Peek Inside the Culture
        </h2>
        <NuxtImg
          class="h-full w-full max-w-full rounded-3xl bg-gray-100 object-cover"
          src="https://mental-health-ngo.s3.eu-north-1.amazonaws.com/group.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
