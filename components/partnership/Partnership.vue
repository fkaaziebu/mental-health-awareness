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
      class="mx-auto flex max-w-screen-xl flex-col justify-between gap-6 py-16"
    >
      <h1 class="text-2xl font-semibold">Our Partners</h1>
      <div class="grid grid-cols-3 gap-5">
        <div
          class="flex cursor-pointer items-center gap-5 rounded-2xl bg-blue-900 p-8"
        >
          <LinkIcon class="h-8 w-8 text-gray-100" />
          <span class="text-3xl text-white">Pepsodent</span>
        </div>
        <div
          class="flex cursor-pointer items-center gap-5 rounded-2xl bg-blue-900 p-8"
        >
          <AcademicCapIcon class="h-8 w-8 text-gray-100" />
          <span class="text-3xl text-white">Colgate</span>
        </div>
        <div
          class="flex cursor-pointer items-center gap-5 rounded-2xl bg-blue-900 p-8"
        >
          <BanknotesIcon class="h-8 w-8 text-gray-100" />
          <span class="text-3xl text-white">Joy TV</span>
        </div>
        <div
          class="flex cursor-pointer items-center gap-5 rounded-2xl bg-blue-900 p-8"
        >
          <BellIcon class="h-8 w-8 text-gray-100" />
          <span class="text-3xl text-white"> Rice Organization </span>
        </div>
        <div
          class="flex cursor-pointer items-center gap-5 rounded-2xl bg-blue-900 p-8"
        >
          <BugAntIcon class="h-8 w-8 text-gray-100" />
          <span class="text-3xl text-white">Sunny Walk</span>
        </div>
        <div
          class="flex cursor-pointer items-center gap-5 rounded-2xl bg-blue-900 p-8"
        >
          <CalendarIcon class="h-8 w-8 text-gray-100" />
          <span class="text-3xl text-white">Hisense</span>
        </div>
        <div
          class="flex cursor-pointer items-center gap-5 rounded-2xl bg-blue-900 p-8"
        >
          <CameraIcon class="h-8 w-8 text-gray-100" />
          <span class="text-3xl text-white">Techno</span>
        </div>
        <div
          class="flex cursor-pointer items-center gap-5 rounded-2xl bg-blue-900 p-8"
        >
          <CircleStackIcon class="h-8 w-8 text-gray-100" />
          <span class="text-3xl text-white">Samsung</span>
        </div>
        <div
          class="flex cursor-pointer items-center gap-5 rounded-2xl bg-blue-900 p-8"
        >
          <CloudIcon class="h-8 w-8 text-gray-100" />
          <span class="text-3xl text-white">Huawei Mobile</span>
        </div>
        <div
          class="flex cursor-pointer items-center gap-5 rounded-2xl bg-blue-900 p-8"
        >
          <CpuChipIcon class="h-8 w-8 text-gray-100" />
          <span class="text-3xl text-white">Chromium</span>
        </div>
        <div
          class="flex cursor-pointer items-center gap-5 rounded-2xl bg-blue-900 p-8"
        >
          <CursorArrowRippleIcon class="h-8 w-8 text-gray-100" />
          <span class="text-3xl text-white">Brilliantly</span>
        </div>
      </div>
    </div>
  </div>
</template>
