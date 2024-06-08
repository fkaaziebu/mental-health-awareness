<script setup>
// Components
import Navbar from "~/components/global/Navbar.vue";
import Footer from "~/components/global/Footer.vue";
import Modal from "~/components/global/Modal.vue";

// Composable
import { useNavbar } from "~/composables/useNavbar.js";
const { navbarInstance } = useNavbar();
</script>
<template>
  <Navbar />
  <div @click="navbarInstance.collapse()"><slot /></div>
  <Footer @click="navbarInstance.collapse()" />
  <Modal @click="navbarInstance.collapse()" />
</template>
