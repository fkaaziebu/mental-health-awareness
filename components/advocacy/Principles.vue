<script setup>
import {
  AcademicCapIcon,
  BanknotesIcon,
  BriefcaseIcon,
  BugAntIcon,
} from "@heroicons/vue/24/outline";
</script>
<template>
  <div class="w-full pb-10 pt-10 sm:py-10 bg-gray-50">
    <div
      class="mx-auto flex max-w-screen-xl flex-row items-center justify-between gap-10 py-4 sm:flex-col"
    >
      <div class="flex w-full items-center justify-between border-b pb-6">
        <h1 class="w-full text-2xl font-bold">Our Guiding Principles</h1>
        <p class="w-full text-xl text-gray-600">
          We are a financial guide and guardian for our clients. These are the
          pillars that support tht relationship.
        </p>
      </div>
      <div class="flex w-full items-center">
        <div
          class="flex w-full flex-col items-center gap-6 border-l border-r p-5 text-center first:border-l-0 last:border-r-0"
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
          class="flex w-full flex-col items-center gap-6 border-l border-r p-5 text-center first:border-l-0 last:border-r-0"
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
          class="flex w-full flex-col items-center gap-6 border-l border-r p-5 text-center first:border-l-0 last:border-r-0"
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
          class="flex w-full flex-col items-center gap-6 border-l border-r p-5 text-center first:border-l-0 last:border-r-0"
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
