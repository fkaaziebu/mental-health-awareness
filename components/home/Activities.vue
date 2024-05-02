<script setup>
import { LinkIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <div class="w-full">
    <div
      class="mx-auto flex max-w-screen-xl flex-col justify-between gap-6 py-16"
    >
      <h1 class="text-2xl font-semibold">Activities</h1>
      <div class="grid items-center justify-center gap-4 sm:grid-cols-4">
        <div class="group max-w-full rounded-lg bg-white dark:bg-gray-800">
          <div class="flex flex-col gap-5">
            <div class="relative">
              <NuxtImg
                class="h-full w-full max-w-full rounded-lg bg-gray-100 object-cover"
                src="/person.jpg"
                alt=""
              />
              <div
                class="absolute left-0 top-0 hidden h-full w-full items-center justify-center group-hover:flex"
              >
                <div class="mt-auto w-full px-6 py-8">
                  <div
                    class="flex w-full items-center justify-between rounded-xl bg-white p-2"
                  >
                    <div class="flex flex-col gap-1">
                      <span class="font-semibold text-gray-800"
                        >Lorem, ipsum dolor.</span
                      >
                      <span class="text-xs italic">Lorem, ipsum.</span>
                    </div>
                    <div
                      class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-blue-500 p-2"
                    >
                      <LinkIcon class="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="group max-w-full rounded-lg bg-white dark:bg-gray-800">
          <div class="flex flex-col gap-5">
            <div class="relative">
              <NuxtImg
                class="h-full w-full max-w-full rounded-lg bg-gray-100 object-cover"
                src="/person.jpg"
                alt=""
              />
              <div
                class="absolute left-0 top-0 hidden h-full w-full items-center justify-center group-hover:flex"
              >
                <div class="mt-auto w-full px-6 py-8">
                  <div
                    class="flex w-full items-center justify-between rounded-xl bg-white p-2"
                  >
                    <div class="flex flex-col gap-1">
                      <span class="font-semibold text-gray-800"
                        >Lorem, ipsum dolor.</span
                      >
                      <span class="text-xs italic">Lorem, ipsum.</span>
                    </div>
                    <div
                      class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-blue-500 p-2"
                    >
                      <LinkIcon class="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="group max-w-full rounded-lg bg-white dark:bg-gray-800">
          <div class="flex flex-col gap-5">
            <div class="relative">
              <NuxtImg
                class="h-full w-full max-w-full rounded-lg bg-gray-100 object-cover"
                src="/person.jpg"
                alt=""
              />
              <div
                class="absolute left-0 top-0 hidden h-full w-full items-center justify-center group-hover:flex"
              >
                <div class="mt-auto w-full px-6 py-8">
                  <div
                    class="flex w-full items-center justify-between rounded-xl bg-white p-2"
                  >
                    <div class="flex flex-col gap-1">
                      <span class="font-semibold text-gray-800"
                        >Lorem, ipsum dolor.</span
                      >
                      <span class="text-xs italic">Lorem, ipsum.</span>
                    </div>
                    <div
                      class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-blue-500 p-2"
                    >
                      <LinkIcon class="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="group max-w-full rounded-lg bg-white dark:bg-gray-800">
          <div class="flex flex-col gap-5">
            <div class="relative">
              <NuxtImg
                class="h-full w-full max-w-full rounded-lg bg-gray-100 object-cover"
                src="/person.jpg"
                alt=""
              />
              <div
                class="absolute left-0 top-0 hidden h-full w-full items-center justify-center group-hover:flex"
              >
                <div class="mt-auto w-full px-6 py-8">
                  <div
                    class="flex w-full items-center justify-between rounded-xl bg-white p-2"
                  >
                    <div class="flex flex-col gap-1">
                      <span class="font-semibold text-gray-800"
                        >Lorem, ipsum dolor.</span
                      >
                      <span class="text-xs italic">Lorem, ipsum.</span>
                    </div>
                    <div
                      class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-blue-500 p-2"
                    >
                      <LinkIcon class="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
