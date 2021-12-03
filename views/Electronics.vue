<template>
 
    <v-container fluid class="lighten-5">
   
   <Navbar/>
          <Electronics />
        
     
    </v-container>

</template>

<script>
import Electronics from "../components/Electronics.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "About",
    components: {
      Electronics,
      Navbar
    },
};
</script>

<style>
</style>