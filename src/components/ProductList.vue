<!---------------------------------Calling data from state------------------------------------------------>
<template>

  <v-card class="d-flex flex-row flex-wrap">
    <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product" 
        />
   
    </v-card>

    

     
</template>




<script>
import ProductCard from "./ProductCard.vue";
export default {
  components: {
    ProductCard,
  },
  computed: {
    products() {
      return this.$store.state.products; 
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>
