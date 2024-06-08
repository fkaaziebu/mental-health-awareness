<script setup>
import { initFlowbite } from "flowbite";
import { onMounted } from "vue";

// Components
import Hero from "~/components/about-us/Hero.vue";
import History from "~/components/about-us/History.vue";
import Mission from "~/components/about-us/Mission.vue";
import Vission from "~/components/about-us/Vission.vue";
import Donate from "~/components/global/Donate.vue";

onMounted(() => {
  initFlowbite();
});
</script>
<template>
  <div>
    <Hero />
    <History />
    <Mission />
    <Vission />
    <Donate class="pb-0" />
  </div>
</template>
