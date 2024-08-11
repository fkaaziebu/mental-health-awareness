<script setup>
import { ArrowsPointingInIcon } from "@heroicons/vue/24/solid";
import { useVolunteerModal } from "~/composables/useVolunteerModal.js";
const { initModal, modalInstance } = useVolunteerModal();

const volunteerOption = ref('')

onMounted(() => {
  initModal("volunteerModal");
});
</script>
<template>
  <div
    id="volunteerModal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
  >
    <div class="relative max-h-full w-full max-w-2xl p-4">
      <div class="relative rounded-lg bg-white shadow dark:bg-gray-700">
        <div
          class="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            <div class="flex items-center gap-4">
              <span>Fill form to become a volunteer</span>
              <ArrowsPointingInIcon class="h-5 w-5 text-red-500" />
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
        <div class="flex w-full flex-col gap-10 rounded-lg bg-white px-6 py-8">
          <div class="flex flex-col gap-4">
            <div class="mb-5 flex justify-between gap-4">
              <div class="w-full">
                <label
                  for="name"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >Name</label
                >
                <input
                  type="name"
                  id="name"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div class="w-full">
                <label
                  for="email"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
            </div>
            <div class="mb-5">
              <label
                for="contact"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >Contact</label
              >
              <input
                type="contact"
                id="contact"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="(+233) 55 081 5604"
                required
              />
            </div>
            <div class="flex gap-2 items-center">
              <input id="one-time" type="radio" value="One_Time" v-model="volunteerOption" />
              <label for="one-time">One Time</label>
              <input id="full-time" type="radio" value="Full_Time" v-model="volunteerOption" />
              <label for="full-time">Full Time</label>
            </div>
          </div>
        </div>
        <div
          class="flex items-center rounded-b border-t border-gray-200 p-4 dark:border-gray-600 md:p-5"
        >
          <button
            type="submit"
            class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
          >
            Submit
          </button>
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
