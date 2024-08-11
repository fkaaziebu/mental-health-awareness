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
        <span class="text-xs italic">Started on the {{ new Date() }}</span>
      </div>
      <div>
        <p class="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          aliquid, quis earum veniam, reiciendis ullam possimus dicta quia
          sapiente ipsam alias? Placeat deleniti laboriosam et aliquam dolore
          consequatur commodi blanditiis minus explicabo odit quisquam in, vero
          officiis assumenda totam reiciendis, dolorem eaque doloremque, soluta
          voluptatum vel nulla. Voluptate amet laboriosam repudiandae quaerat
          non in, expedita et praesentium dolore ullam error inventore sint
          maxime sunt, eaque odio earum maiores. Quos eius fuga ipsum
          accusantium suscipit praesentium in corporis quidem officia facilis
          cumque illum, aut atque! Veniam, id vero sunt neque rem in quia? Sunt
          iusto pariatur reiciendis ea veritatis aliquid suscipit?
        </p>
      </div>
    </div>
  </div>
</template>
