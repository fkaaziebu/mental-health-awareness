<script setup>
import { onMounted } from "vue";
import {
  Bars3BottomRightIcon,
  ChevronDownIcon,
} from "@heroicons/vue/24/outline";
import { HeartIcon } from "@heroicons/vue/24/solid";

// Composable
import { useNavbar } from "~/composables/useNavbar.js";
import { useModal } from "~/composables/useModal.js";
import { useActivePage } from "~/composables/useActivePage.js";
import { useDropdown } from "~/composables/useDropdown.js";
const { initNavbar, navbarInstance } = useNavbar();
const { modalInstance } = useModal();
const { activePage, updateActivePage } = useActivePage();
const { initDropdown, dropdownInstance } = useDropdown();

onMounted(() => {
  initNavbar("navbarTarget", "navbarTrigger");
  initDropdown("dropdownTarget", "dropdownTrigger");
  updateActivePage(window.location.pathname);
});
</script>
<template>
  <nav class="fixed z-50 w-full bg-gray-900">
    <div
      class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-2 py-4"
    >
      <NuxtLink
        to="/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
        @click="navbarInstance.collapse()"
      >
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-7"
          alt="Flowbite Logo"
        />
      </NuxtLink>
      <div
        class="flex items-center space-x-3 lg:order-2 lg:space-x-0 rtl:space-x-reverse"
      >
        <button
          type="button"
          class="group h-8 rounded-full bg-green-300 px-3 py-0 hover:bg-green-400 lg:h-full lg:px-5 lg:py-2"
          @click="[navbarInstance.collapse(), modalInstance.show()]"
        >
          <div class="flex items-center gap-2">
            <HeartIcon class="h-4 w-4 text-green-700 sm:h-5 sm:w-5" />
            <span class="text-xs font-bold">Donate</span>
          </div>
        </button>
        <button
          id="navbarTrigger"
          type="button"
          class="inline-flex items-center justify-center rounded-lg p-1 text-sm text-gray-100 hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950 lg:hidden"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3BottomRightIcon class="h-8 w-8" />
        </button>
      </div>
      <div
        class="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
        id="navbarTarget"
      >
        <ul
          class="mt-4 flex flex-col rounded-lg border border-gray-900 bg-gray-900 p-4 font-medium text-gray-100 lg:mt-0 lg:flex-row lg:space-x-2 lg:border-0 lg:p-0 rtl:space-x-reverse"
        >
          <li>
            <NuxtLink
              to="/"
              class="block rounded px-4 text-lg py-3 lg:bg-transparent lg:px-2 lg:py-1"
              :class="
                activePage === '/'
                  ? 'underline bg-gray-950 lg:rounded-none lg:border-b lg:bg-gray-900'
                  : ''
              "
              @click="[updateActivePage('/'), navbarInstance.collapse()]"
              aria-current="page"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/about-us"
              class="block rounded px-4 text-lg py-3 lg:bg-transparent lg:px-2 lg:py-1"
              :class="
                activePage === '/about-us'
                  ? 'underline bg-gray-950 lg:rounded-none lg:border-b lg:bg-gray-900'
                  : ''
              "
              @click="
                [updateActivePage('/about-us'), navbarInstance.collapse()]
              "
              >About Us</NuxtLink
            >
          </li>
          <li>
            <button
              id="dropdownTrigger"
              class="flex w-full items-center justify-between rounded px-4 py-3 text-lg lg:w-auto lg:border-0 lg:px-2 lg:py-1"
            >
              <div class="flex items-center gap-2">
                <span>Activities</span>
                <ChevronDownIcon class="h-4 w-4" />
              </div>
            </button>
            <!-- Dropdown menu -->
            <div
              id="dropdownTarget"
              class="z-10 hidden w-[87%] divide-y divide-gray-100 rounded-lg bg-white font-normal shadow dark:divide-gray-600 dark:bg-gray-700 sm:w-44"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-400"
                aria-labelledby="dropdownLargeButton"
              >
                <li>
                  <NuxtLink
                    to="/outreach"
                    class="block px-4 py-2 hover:bg-gray-100"
                    :class="activePage === '/outreach' ? 'font-bold' : ''"
                    @click="
                      [updateActivePage('/outreach'), navbarInstance.collapse()]
                    "
                    >Outreach</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    to="/advocacy"
                    class="block px-4 py-2 hover:bg-gray-100"
                    :class="activePage === '/advocacy' ? 'font-bold' : ''"
                    @click="
                      [updateActivePage('/advocacy'), navbarInstance.collapse()]
                    "
                    >Advocacy</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NuxtLink
              to="/partnership"
              class="block rounded px-4 text-lg py-3 lg:bg-transparent lg:px-2 lg:py-1"
              :class="
                activePage === '/partnership'
                  ? 'underline bg-gray-950 lg:rounded-none lg:border-b lg:bg-gray-900'
                  : ''
              "
              @click="
                [updateActivePage('/partnership'), navbarInstance.collapse()]
              "
              >Partnership</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/team"
              class="block rounded px-4 text-lg py-3 lg:bg-transparent lg:px-2 lg:py-1"
              :class="
                activePage === '/team'
                  ? 'underline bg-gray-950 lg:rounded-none lg:border-b lg:bg-gray-900'
                  : ''
              "
              @click="[updateActivePage('/team'), navbarInstance.collapse()]"
              >Our Team</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/resources"
              class="block rounded px-4 text-lg py-3 lg:bg-transparent lg:px-2 lg:py-1"
              :class="
                activePage === '/resources'
                  ? 'underline bg-gray-950 lg:rounded-none lg:border-b lg:bg-gray-900'
                  : ''
              "
              @click="
                [updateActivePage('/resources'), navbarInstance.collapse()]
              "
              >Resources</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/contact-us"
              class="block rounded px-4 text-lg py-3 lg:bg-transparent lg:px-2 lg:py-1"
              :class="
                activePage === '/contact-us'
                  ? 'underline bg-gray-950 lg:rounded-none lg:border-b lg:bg-gray-900'
                  : ''
              "
              @click="
                [updateActivePage('/contact-us'), navbarInstance.collapse()]
              "
              >Contact Us</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
