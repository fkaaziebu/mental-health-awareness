<script setup>
import {
  LinkIcon,
  AcademicCapIcon,
  BanknotesIcon,
  BellIcon,
  BugAntIcon,
  CalendarIcon,
  CameraIcon,
  CircleStackIcon,
  CloudIcon,
  CpuChipIcon,
  CursorArrowRippleIcon,
} from "@heroicons/vue/24/outline";
</script>
<template>
  <div class="w-full">
    <div
      class="mx-auto flex max-w-screen-xl flex-col justify-between gap-6 px-5 py-16 2xl:px-0"
    >
      <h1 class="text-2xl font-semibold text-gray-900">Our Partners</h1>
      <div class="grid grid-cols-4 gap-2 md:grid-cols-4">
        <div
          class="flex cursor-pointer items-center justify-center gap-5 rounded-2xl bg-blue-900 p-8"
        >
          <LinkIcon class="h-8 w-8 text-gray-100" />
          <span class="hidden truncate text-3xl text-white lg:block"
            >Pepsodent</span
          >
        </div>
        <div
          class="flex cursor-pointer items-center justify-center gap-5 rounded-2xl bg-blue-900 p-8"
        >
          <AcademicCapIcon class="h-8 w-8 text-gray-100" />
          <span class="hidden truncate text-3xl text-white lg:block"
            >Colgate</span
          >
        </div>
        <div
          class="flex cursor-pointer items-center justify-center gap-5 rounded-2xl bg-blue-900 p-8"
        >
          <BanknotesIcon class="h-8 w-8 text-gray-100" />
          <span class="hidden truncate text-3xl text-white lg:block"
            >Joy TV</span
          >
        </div>
        <div
          class="flex cursor-pointer items-center justify-center gap-5 rounded-2xl bg-blue-900 p-8"
        >
          <BellIcon class="h-8 w-8 text-gray-100" />
          <span class="hidden truncate text-3xl text-white lg:block">
            Rice Organization
          </span>
        </div>
        <div
          class="flex cursor-pointer items-center justify-center gap-5 rounded-2xl bg-blue-900 p-8"
        >
          <BugAntIcon class="h-8 w-8 text-gray-100" />
          <span class="hidden truncate text-3xl text-white lg:block"
            >Sunny Walk</span
          >
        </div>
        <div
          class="flex cursor-pointer items-center justify-center gap-5 rounded-2xl bg-blue-900 p-8"
        >
          <CalendarIcon class="h-8 w-8 text-gray-100" />
          <span class="hidden truncate text-3xl text-white lg:block"
            >Hisense</span
          >
        </div>
        <div
          class="flex cursor-pointer items-center justify-center gap-5 rounded-2xl bg-blue-900 p-8"
        >
          <CameraIcon class="h-8 w-8 text-gray-100" />
          <span class="hidden truncate text-3xl text-white lg:block"
            >Techno</span
          >
        </div>
        <div
          class="flex cursor-pointer items-center justify-center gap-5 rounded-2xl bg-blue-900 p-8"
        >
          <CircleStackIcon class="h-8 w-8 text-gray-100" />
          <span class="hidden truncate text-3xl text-white lg:block"
            >Samsung</span
          >
        </div>
        <div
          class="flex cursor-pointer items-center justify-center gap-5 rounded-2xl bg-blue-900 p-8"
        >
          <CloudIcon class="h-8 w-8 text-gray-100" />
          <span class="hidden truncate text-3xl text-white lg:block"
            >Huawei Mobile</span
          >
        </div>
        <div
          class="flex cursor-pointer items-center justify-center gap-5 rounded-2xl bg-blue-900 p-8"
        >
          <CpuChipIcon class="h-8 w-8 text-gray-100" />
          <span class="hidden truncate text-3xl text-white lg:block"
            >Chromium</span
          >
        </div>
        <div
          class="flex cursor-pointer items-center justify-center gap-5 rounded-2xl bg-blue-900 p-8"
        >
          <CursorArrowRippleIcon class="h-8 w-8 text-gray-100" />
          <span class="hidden truncate text-3xl text-white lg:block"
            >Brilliantly</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
