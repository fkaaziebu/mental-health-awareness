<script setup>
import { homeGalleryOptions } from "~/constants.js";
const currentOption = ref("all");
</script>
<template>
  <div class="w-full">
    <div
      class="mx-auto flex max-w-screen-xl flex-col justify-between gap-6 px-5 py-16 2xl:px-0"
    >
      <div class="flex flex-col items-center justify-center gap-16 py-10">
        <div class="flex w-full flex-col items-center justify-center gap-4">
          <h1 class="text-2xl font-semibold text-gray-900">Photo Gallery</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            similique odio atque vero qui?
          </p>
        </div>
        <div class="flex items-center justify-center gap-3">
          <button
            v-for="option in homeGalleryOptions"
            :key="option.btnTitle"
            class="rounded-xl border-2 shadow-sm shadow-green-500 border-green-500 px-3 py-1"
            :class="
              currentOption === option.btnTitle.toLowerCase()
                ? 'bg-green-500 text-white'
                : ''
            "
            @click="currentOption = option.btnTitle.toLowerCase()"
          >
            {{ option.btnTitle }}
          </button>
        </div>
      </div>
      <div
        class="grid items-center justify-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <NuxtImg
          v-for="i in 8"
          :key="i"
          class="rounded-sm bg-gray-100 object-cover"
          src="https://mental-health-ngo.s3.eu-north-1.amazonaws.com/person.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
