<script setup>
import { HeartIcon } from "@heroicons/vue/24/solid";
import { useModal } from "~/composables/useModal";
const { initModal, modalInstance } = useModal();

onMounted(() => {
  initModal("paymentModal");
});
</script>
<template>
  <div
    id="paymentModal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
  >
    <div class="relative max-h-full w-full max-w-2xl p-4">
      <!-- Modal content -->
      <div class="relative rounded-lg bg-white shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            <div class="flex items-center gap-4">
              <span>Donate To Support Us</span>
              <HeartIcon class="h-5 w-5 text-red-500" />
            </div>
          </h3>
          <button
            type="button"
            class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            @click="modalInstance.toggle()"
          >
            <svg
              class="h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="space-y-4 p-4 md:p-5">
          <p
            class="text-sm leading-relaxed text-gray-500 dark:text-gray-400 sm:text-base"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis aut vitae provident mollitia quaerat ducimus accusamus
            officiis porro esse saepe.
          </p>
          <div class="flex justify-between">
            <h3 class="font-medium sm:text-lg">Our Momo Number:</h3>
            <div
              class="rounded-md border border-gray-500 px-3 py-2 text-sm font-bold"
            >
              (+233) 55 081 5604
            </div>
          </div>
          <div class="flex justify-between">
            <h3 class="font-medium sm:text-lg">Account No:</h3>
            <div
              class="rounded-md border border-gray-500 px-3 py-2 text-sm font-bold"
            >
              1345-6790-3469-7803
            </div>
          </div>
        </div>
        <!-- Modal footer -->
        <div
          class="flex items-center rounded-b border-t border-gray-200 p-4 dark:border-gray-600 md:p-5"
        >
          <button
            type="button"
            class="ms-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            @click="modalInstance.toggle()"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
