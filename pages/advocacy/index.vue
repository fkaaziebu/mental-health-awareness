<script setup>
import { initFlowbite } from "flowbite";
import { onMounted } from "vue";

// Components
import Hero from "~/components/advocacy/Hero.vue";
import Stats from "~/components/advocacy/Stats.vue";
import Principles from "~/components/advocacy/Principles.vue";
import Talk from "~/components/advocacy/Talk.vue";
import Donate from "~/components/global/Donate.vue";

onMounted(() => {
  initFlowbite();
});
</script>
<template>
  <div>
    <Hero />
    <Stats />
    <Donate />
    <Principles />
    <Talk />
  </div>
</template>
