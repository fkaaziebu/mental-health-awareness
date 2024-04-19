<script setup>
import { initFlowbite } from "flowbite";
import { onMounted } from "vue";

// Components
import Hero from "~/components/resources/Hero.vue";
import Resources from "~/components/resources/Resources.vue";

onMounted(() => {
  initFlowbite();
});
</script>
<template>
  <div>
    <Hero />
    <Resources />
  </div>
</template>
