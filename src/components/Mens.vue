<!--------------------------------------------------------------------------------->
<template>
  <v-app>
    <h1 align="center">Men's clothing</h1>
    <v-spacer></v-spacer>
    <v-card class="d-flex flex-row flex-wrap ">

    <v-card id="my-card" class="mx-auto" max-width="250"  v-for="menclothing in menclothings" :key='menclothing.id'>
      
      <v-img contain height="250" :src="menclothing.image">
      </v-img>
      <v-card-title>{{ menclothing.title }}</v-card-title>

      <v-card-text class="mb-8">
        <v-row align="center" > </v-row>

        <div class="my-4 text-subtitle-1">{{ menclothing.category }}
        <div class="mb-8 text-subtitle-1 red--text">${{ menclothing.price }}</div></div>
      </v-card-text>

      <v-spacer></v-spacer>
      <v-btn class="ma-2" absolute bottom  
   outlined color="indigo"> 
        + Add to Cart </v-btn>
         
    </v-card>
    </v-card>
  </v-app>
</template>

<!--------------------------------------------------------------------------------->
<script>
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios,axios)

export default {
  name: "menclothing",
  // props: ["jewelery"],
  data: () => {
    return {
      loading: false,
      selection: 1,
     menclothings:[],
    };
  },
 //Calling data from Api
  mounted(){
    Vue.axios.get("https://fakestoreapi.com/products/category/men's clothing")
    .then((response) => {
      this.menclothings =response.data,
      console.log( response.data)

    })
  },
   methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style scoped>

</style>