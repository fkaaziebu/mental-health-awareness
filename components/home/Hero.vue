<script setup>
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
import { homeHeroContent } from "~/constants.js";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

// Composable
import { useActivePage } from "~/composables/useActivePage.js";
const { updateActivePage } = useActivePage();
</script>
<template>
  <Carousel
    :items-to-show="1"
    :wrapAround="true"
    :autoplay="5000"
    :pauseAutoplayOnHover="true"
  >
    <Slide v-for="hero in homeHeroContent" :key="hero.title">
      <div class="relative w-full pt-10 sm:pt-12" style="height: 80vh">
        <NuxtImg
          src="https://mental-health-ngo.s3.eu-north-1.amazonaws.com/group.jpg"
          class="h-full w-full object-cover"
        />
        <div
          class="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-60 px-5"
        >
          <div
            class="mx-auto flex h-full w-full max-w-screen-xl items-center justify-between gap-5 py-4"
          >
            <div class="w-full lg:mt-auto lg:pb-20 xl:pb-20">
              <div
                class="flex w-full flex-col items-start justify-between gap-10 lg:flex-row lg:items-center"
              >
                <div
                  class="flex w-full flex-col gap-5 sm:gap-7 md:w-[50%] md:gap-10"
                >
                  <h1
                    class="text-center text-4xl font-semibold text-gray-100 md:text-left md:text-6xl lg:text-4xl xl:text-6xl"
                  >
                    {{ hero.title }}
                  </h1>
                  <p class="text-base text-gray-200">
                    {{ hero.subText }}
                  </p>
                </div>
                <div
                  class="mt-36 flex w-full justify-start md:mt-0 md:w-[50%] lg:justify-end"
                >
                  <button
                    type="button"
                    class="group w-full rounded-xl bg-gray-800 px-4 py-3 text-gray-50 hover:bg-gray-900 md:w-auto"
                    @click="
                      [
                        updateActivePage('/contact-us'),
                        navigateTo('/contact-us'),
                      ]
                    "
                  >
                    <div
                      class="flex w-full items-center justify-between gap-7 md:w-auto md:justify-normal"
                    >
                      <span class="font-semibold sm:text-lg md:font-bold"
                        >Talk To Us</span
                      >
                      <ArrowRightIcon
                        class="h-6 w-6 rounded-full bg-gray-100 p-1 text-gray-900 group-hover:bg-gray-200 md:h-9 md:w-9 md:p-2"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
<style>
.carousel__prev,
.carousel__next {
  @apply text-white;
}
.carousel__pagination {
  @apply gap-2;
}
</style>
