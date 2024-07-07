<script setup>
// Components
import Navbar from "~/components/global/Navbar.vue";
import Footer from "~/components/global/Footer.vue";
import Modal from "~/components/global/Modal.vue";
import PartnershipForm from "~/components/global/PartnershipForm.vue";
import VolunteerForm from "~/components/global/VolunteerForm.vue";

// Composable
import { useNavbar } from "~/composables/useNavbar.js";
const { navbarInstance } = useNavbar();
</script>
<template>
  <Navbar />
  <div @click="navbarInstance.collapse()"><slot /></div>
  <Footer @click="navbarInstance.collapse()" />
  <Modal @click="navbarInstance.collapse()" />
  <PartnershipForm />
  <VolunteerForm />
</template>
