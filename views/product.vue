<!-------------------------------Product Description-------------------------------------------------->
<template>
<v-app>
  
  <v-card class="mx-auto my-12" >
    <Navbar/>
    
      
     
    <v-img height="250" contain :src="product.image"></v-img>

    <v-card-title>{{ product.title }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4 mb-5">4.5 (413)</div>
      </v-row>

      <div>
        {{ product.description }}
      </div>
    </v-card-text>
    <v-spacer></v-spacer>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text outlined   @click="addToCart()">
         Add to Cart
        </v-btn>
       
      </v-card-actions>
    
  </v-card>
  </v-app>
</template>


<script>
import Navbar from "../components/Navbar.vue";
export default {
  props: ["id"],
  components:{
    Navbar
  },

  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },

  methods: {
    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: 1,
      });
    },
  },
};
</script>
