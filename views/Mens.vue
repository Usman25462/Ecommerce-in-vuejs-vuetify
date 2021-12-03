<template>
 
    <v-container fluid class="lighten-5">
   
   <Navbar/>
          <Mens />
        
     
    </v-container>

</template>

<script>
import Mens from "../components/Mens.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "About",
    components: {
      Mens,
      Navbar
    },
};
</script>

<style>
</style>