<script setup>
import {
  AcademicCapIcon,
  BanknotesIcon,
  BriefcaseIcon,
  BugAntIcon,
} from "@heroicons/vue/24/outline";
</script>
<template>
  <div class="w-full bg-gray-50 px-5 pb-10 pt-10 sm:py-10 2xl:px-0">
    <div
      class="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-10 py-4"
    >
      <div class="flex w-full items-center justify-between border-b pb-6">
        <h1 class="w-full text-2xl font-semibold text-gray-900">
          Our Guiding Principles
        </h1>
        <p class="w-full text-gray-600">
          We are a financial guide and guardian for our clients. These are the
          pillars that support tht relationship.
        </p>
      </div>
      <div
        class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
      >
        <div
          class="flex w-full flex-col items-center gap-6 rounded-md border p-5 text-center"
        >
          <div class="flex flex-col items-center justify-center gap-2">
            <AcademicCapIcon class="h-10 w-10" />
            <span class="text-lg font-bold">Create</span>
          </div>
          <div>
            <p class="leading-7 text-gray-600">
              You have a financial vision, we have a way to get you there
            </p>
          </div>
        </div>
        <div
          class="flex w-full flex-col items-center gap-6 rounded-md border p-5 text-center"
        >
          <div class="flex flex-col items-center justify-center gap-2">
            <BanknotesIcon class="h-10 w-10" />
            <span class="text-lg font-bold">Grow</span>
          </div>
          <div>
            <p class="leading-7 text-gray-600">
              Setting you on the growth path toward your goals
            </p>
          </div>
        </div>
        <div
          class="flex w-full flex-col items-center gap-6 rounded-md border p-5 text-center"
        >
          <div class="flex flex-col items-center justify-center gap-2">
            <BriefcaseIcon class="h-10 w-10" />
            <span class="text-lg font-bold">Focus</span>
          </div>
          <div>
            <p class="leading-7 text-gray-600">
              Keeping you focused on what matters most
            </p>
          </div>
        </div>
        <div
          class="flex w-full flex-col items-center gap-6 rounded-md border p-5 text-center"
        >
          <div class="flex flex-col items-center justify-center gap-2">
            <BugAntIcon class="h-10 w-10" />
            <span class="text-lg font-bold">Protect</span>
          </div>
          <div>
            <p class="leading-7 text-gray-600">
              Protecting your assets by manageing uncertainty
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
