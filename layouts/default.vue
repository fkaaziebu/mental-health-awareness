<script setup>
import { initFlowbite } from "flowbite";
import { onMounted } from "vue";

// Components
import Navbar from "~/components/global/Navbar.vue";
import Footer from "~/components/global/Footer.vue";
import Modal from "~/components/global/Modal.vue";

onMounted(() => {
  initFlowbite();
});
</script>
<template>
  <Navbar />
  <slot />
  <Footer />
  <Modal />
</template>
