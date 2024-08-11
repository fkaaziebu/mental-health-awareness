<script setup>
import { MinusIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <div class="w-full">
    <div
      class="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-6 px-5 py-16 2xl:px-0"
    >
      <div class="flex w-full flex-col items-center gap-3">
        <div class="flex w-full items-center justify-center gap-2">
          <MinusIcon class="h-6 w-6" />
          <h1 class="text-3xl font-bold uppercase text-gray-500">Our Story</h1>
          <MinusIcon class="h-6 w-6" />
        </div>
        <span class="text-xs italic">A healing space by youth for youth</span>
      </div>
      <div>
        <p class="text-gray-600">
          Healing Minds is a registered non-profit organization under the
          Ghanaian... Healing Minds was founded in 2023 by young passionate
          mental health advocates committed to promoting youth's emotional and
          psychological well-being. As an interdisciplinary team, we promote
          mental health awareness among Ghanaian youth through a safe and
          judgment-free environment where clients can explore, understand,
          process, and heal. We believe that people are the experts in their own
          lives. To facilitate this, we provide them with resources that enable
          them to navigate the mental health and wellness aspects of their lives
          in a manner that honors their holistic nature.
        </p>
      </div>
    </div>
  </div>
</template>
