<template>
 
    <v-container fluid class="lighten-5">
   
   <Navbar/>
          <ProductList />
        
     
    </v-container>

</template>

<script>
import ProductList from "../components/ProductList.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "About",
    components: {
      ProductList,
      Navbar
    },
};
</script>

<style>
</style>