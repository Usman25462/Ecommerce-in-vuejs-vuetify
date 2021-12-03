<template>
 
    <v-container fluid class="lighten-5">
   
   <Navbar/>
          <Womens />
        
     
    </v-container>

</template>

<script>
import Womens from "../components/Womens.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "About",
    components: {
      Womens,
      Navbar
    },
};
</script>

<style>
</style>