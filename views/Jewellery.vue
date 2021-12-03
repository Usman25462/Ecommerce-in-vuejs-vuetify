<template>
 
    <v-container fluid class="lighten-5">
   
   <Navbar/>
          <Jewellery />
        
     
    </v-container>

</template>

<script>
import Jewellery from "../components/Jewellery.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "About",
    components: {
      Jewellery,
      Navbar
    },
    
};
</script>

<style>
</style>