<script setup>
import { initFlowbite } from "flowbite";
import { onMounted } from "vue";

// Components
import Hero from "~/components/home/Hero";
import VisionMission from "~/components/home/VisionMission";
import Team from "~/components/home/Team";

onMounted(() => {
  initFlowbite();
});
</script>
<template>
  <div>
    <Hero />
    <VisionMission />
    <Team />
  </div>
</template>
