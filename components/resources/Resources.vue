<script setup>
import { ArrowDownTrayIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <div class="w-full px-5 pb-10 pt-10 sm:pb-16 sm:pt-4 2xl:px-0">
    <div
      class="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-10 py-4 sm:flex-col"
    >
      <div class="flex w-full items-center justify-center py-4">
        <h1 class="text-3xl font-semibold">
          An ever-growing list of resources
        </h1>
      </div>
      <div class="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div v-for="i in 7" :key="i" class="w-full rounded-md border p-2">
          <div class="flex flex-col gap-5">
            <NuxtImg src="/person.jpg" class="rounded-md object-cover" />
            <div class="flex flex-col gap-3">
              <h2 class="text-lg font-semibold">Mental Health Awareness</h2>
              <p class="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
                quisquam.
              </p>
            </div>
          </div>
          <button
            type="button"
            class="mt-4 flex items-center gap-2 rounded-md border px-3 py-2"
          >
            <span class="text-sm">Download pdf</span>
            <ArrowDownTrayIcon class="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
