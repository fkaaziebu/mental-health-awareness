<script setup>
import { initFlowbite } from "flowbite";
import { onMounted } from "vue";

import Hero from "~/components/team/Hero.vue";
import Team from "~/components/team/Team.vue";
import Donate from "~/components/global/Donate.vue";

onMounted(() => {
  initFlowbite();
});
</script>
<template>
  <div>
    <Hero />
    <Team />
    <Donate />
  </div>
</template>
