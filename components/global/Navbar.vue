<script setup>
import { initFlowbite } from "flowbite";
import { onMounted } from "vue";
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
import { HeartIcon } from "@heroicons/vue/24/solid";

onMounted(() => {
  initFlowbite();
});
</script>
<template>
  <nav class="fixed z-50 w-full bg-gray-900">
    <div
      class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between py-4"
    >
      <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8"
          alt="Flowbite Logo"
        />
        <span
          class="self-center whitespace-nowrap text-2xl font-semibold text-gray-100"
          >Awareness</span
        >
      </NuxtLink>
      <div class="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
        <button
          data-modal-target="default-modal"
          data-modal-toggle="default-modal"
          type="button"
          class="group rounded-full bg-green-300 px-5 py-2 hover:bg-green-400"
        >
          <div class="flex items-center gap-2">
            <HeartIcon class="h-5 w-5 text-green-700" />
            <span class="text-sm font-bold">Donate</span>
          </div>
        </button>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
        id="navbar-dropdown"
      >
        <ul
          class="mt-4 flex flex-col rounded-lg border border-gray-900 bg-gray-900 p-4 font-medium text-gray-100 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse"
        >
          <li>
            <NuxtLink
              to="/"
              class="block rounded px-3 py-2 hover:bg-gray-100 hover:text-blue-700 md:bg-transparent md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
              aria-current="page"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/about-us"
              class="block rounded px-3 py-2 hover:bg-gray-100 hover:text-blue-700 md:border-0 md:p-0 md:hover:bg-transparent"
              >About Us</NuxtLink
            >
          </li>
          <li>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="flex w-full items-center justify-between rounded px-3 py-2 hover:bg-gray-100 hover:text-blue-700 md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
            >
              Activities
              <svg
                class="ms-2.5 h-2.5 w-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div
              id="dropdownNavbar"
              class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white font-normal shadow dark:divide-gray-600 dark:bg-gray-700"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-400"
                aria-labelledby="dropdownLargeButton"
              >
                <li>
                  <NuxtLink
                    to="/outreach"
                    class="block px-4 py-2 hover:bg-gray-100"
                    >Outreach</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    to="/advocacy"
                    class="block px-4 py-2 hover:bg-gray-100"
                    >Advocacy</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NuxtLink
              to="/partnership"
              class="block rounded px-3 py-2 hover:bg-gray-100 hover:text-blue-700 md:border-0 md:p-0 md:hover:bg-transparent"
              >Partnership</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/team"
              class="block rounded px-3 py-2 hover:bg-gray-100 hover:text-blue-700 md:border-0 md:p-0 md:hover:bg-transparent"
              >Our Team</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/resources"
              class="block rounded px-3 py-2 hover:bg-gray-100 hover:text-blue-700 md:border-0 md:p-0 md:hover:bg-transparent"
              >Resources</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/contact-us"
              class="block rounded px-3 py-2 hover:bg-gray-100 hover:text-blue-700 md:border-0 md:p-0 md:hover:bg-transparent"
              >Contact Us</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
