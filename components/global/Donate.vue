<script setup>
import { HeartIcon } from "@heroicons/vue/24/solid";
defineProps({
  class: {
    type: String,
  },
});
</script>
<template>
  <div class="w-full bg-gray-100">
    <div
      class="mx-auto flex max-w-screen-xl flex-col justify-between gap-12 px-5 pb-16 pt-16 2xl:px-0"
      v-bind="$attrs"
    >
      <div class="flex flex-col items-center justify-center gap-10">
        <h1 class="text-3xl font-bold">Compassion and Resilience</h1>
        <p class="text-center leading-9 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
          quidem, magnam suscipit esse a quibusdam. Illo dolores et dignissimos
          error, vitae facere rerum dolorum quasi cupiditate. Recusandae maiores
          temporibus harum autem facilis. Reiciendis eaque at excepturi aperiam
          consequuntur, praesentium rerum temporibus possimus! Fuga perferendis
          aperiam est tempore eveniet vel itaque.
        </p>
      </div>
      <div class="flex items-center justify-center">
        <button
          data-modal-target="default-modal"
          data-modal-toggle="default-modal"
          type="button"
          class="rounded-2xl bg-green-300 px-5 py-2 hover:bg-green-400"
        >
          <div class="flex items-center gap-2">
            <HeartIcon class="h-5 w-5 text-green-700" />
            <span class="text-sm font-bold">Donate Now</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
