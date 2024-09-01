<script setup>
import { teams } from "@/data.js";
import {
  ArrowsPointingInIcon,
  ScissorsIcon,
  CursorArrowRaysIcon,
} from "@heroicons/vue/24/solid";
</script>
<template>
  <div class="w-full">
    <div
      class="mx-auto flex max-w-screen-xl items-center justify-between gap-5 px-5 pb-16 pt-10 2xl:px-0"
    >
      <div class="flex w-full flex-col gap-5 sm:gap-8">
        <h2 class="font-semibold text-blue-700">Meet the Team</h2>
        <h3 class="text-2xl font-semibold text-gray-900 sm:w-[50%]">
          Meet Our Dedicated Team of Educators and Innovators
        </h3>
        <div
          class="grid items-start justify-center gap-4 sm:grid-cols-2 md:grid-cols-3"
        >
          <div
            v-for="team in teams"
            class="max-w-full rounded-lg bg-white dark:bg-gray-800"
          >
            <div class="flex w-full flex-col gap-2 rounded-md border px-2 py-2">
              <div>
                <NuxtImg
                  class="bg-gray-100 object-cover h-80 w-full"
                  :src="team.url"
                  alt=""
                />
              </div>
              <div class="flex flex-col gap-1">
                <h4 class="text-lg font-semibold">{{ team.name }}</h4>
                <span class="font-medium italic">Chairman</span>
              </div>
              <div class="flex flex-col gap-3">
                <p>
                  {{ team.description }}
                </p>
                <div class="flex items-center gap-2">
                  <span class="rounded-full bg-gray-950 p-2">
                    <ArrowsPointingInIcon class="h-4 w-4 text-white" />
                  </span>
                  <span class="rounded-full bg-gray-950 p-2">
                    <ScissorsIcon class="h-4 w-4 text-white" />
                  </span>
                  <span class="rounded-full bg-gray-950 p-2">
                    <CursorArrowRaysIcon class="h-4 w-4 text-white" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
