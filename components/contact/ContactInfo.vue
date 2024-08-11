<script setup>
import {
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/vue/24/outline";
</script>
<template>
  <div class="w-full bg-gray-200 px-5 2xl:px-0">
    <div
      class="mx-auto flex h-full w-full max-w-screen-xl flex-col items-center justify-between gap-10 lg:gap-6 pb-16 pt-32 lg:flex-row"
    >
      <div class="flex flex-col gap-10 md:w-[70%] lg:w-[40%]">
        <div class="flex flex-col gap-5">
          <h1 class="text-5xl text-center lg:text-left">Contact Us</h1>
          <p class="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            dolorem commodi aliquam quae quasi, qui iure numquam labore
            provident aliquid.
          </p>
        </div>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <EnvelopeIcon class="h-5 w-5" />
            <span>fkaaziebu1998@gmail.com</span>
          </div>
          <div class="flex items-center gap-3">
            <ChatBubbleOvalLeftEllipsisIcon class="h-5 w-5" />
            <span>Whatsapp ((+233) 55 081 5604)</span>
          </div>
          <div class="flex items-center gap-3">
            <PhoneIcon class="h-5 w-5" />
            <span>Support (+233) 55 081 5604</span>
          </div>
        </div>
      </div>
      <div
        class="flex w-full flex-col gap-10 rounded-lg bg-white px-6 py-8 md:w-[70%] lg:w-[50%]"
      >
        <div>
          <h1 class="text-2xl font-medium">We'd love to hear from you!</h1>
          <h2 class="text-xl font-medium">Let's get in touch</h2>
        </div>
        <div>
          <div class="mb-5 flex justify-between gap-4">
            <div class="w-full">
              <label
                for="name"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >Full Name</label
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
          <div class="mb-5">
            <label
              for="message"
              class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >Your Message</label
            >
            <textarea
              id="message"
              rows="4"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
