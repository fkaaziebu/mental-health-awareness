<script setup>
import { ArrowUpIcon } from "@heroicons/vue/24/outline";
const is_positive_percent = ref(true);
</script>
<template>
  <div class="w-full pb-10 pt-10 sm:py-10">
    <div
      class="mx-auto flex max-w-screen-xl flex-col items-center justify-between py-4 sm:flex-row"
    >
      <div
        v-for="i in 4"
        :key="i"
        class="group flex w-full flex-col items-start gap-1 border-l border-l-gray-200 px-6 py-5 hover:border-l-green-300 hover:bg-gray-100"
      >
        <div class="flex items-center gap-5">
          <span class="text-2xl font-semibold">13,556</span>
          <div
            class="flex items-center gap-1 rounded-md bg-gray-100 px-1 py-0.5 group-hover:bg-gray-50"
          >
            <ArrowUpIcon
              v-if="is_positive_percent"
              class="h-2.5 w-2.5 text-green-500"
            />
            <ArrowDownIcon v-else class="h-2.5 w-2.5 text-red-500" />
            <span
              class="text-xs"
              :class="[is_positive_percent ? 'text-green-500' : 'text-red-500']"
              >95%</span
            >
          </div>
        </div>
        <div>
          <p class="text-sm text-gray-400">Lorem ipsum dolor sit.</p>
        </div>
      </div>
    </div>
  </div>
</template>
