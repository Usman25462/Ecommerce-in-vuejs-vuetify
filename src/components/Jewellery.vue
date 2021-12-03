<!--------------------------------------------------------------------------------->
<template>
  <v-app>
    <h1 align="center">Jewellerys</h1>
    <v-spacer></v-spacer>
    <v-card class="d-flex flex-row flex-wrap">
    <v-card id="my-card" class="mx-auto " max-width="270" 
     v-for="jewelery in jewelerys" :key='jewelery.id'>
     <div>
      <v-img contain height="200" :src="jewelery.image">
      </v-img>
      <v-card-title>{{ jewelery.title }}</v-card-title>

      <v-card-text class="mb-8">
        <v-row align="center" class="mx-0"> </v-row>
        <div class="my-4 text-subtitle-1">{{ jewelery.category }}
        <div class="mb-8 text-subtitle-1 red--text" >${{ jewelery.price }}</div></div>
      </v-card-text>

   

      <v-btn class="mx-2"   absolute bottom outlined color="indigo"> + Add to Cart </v-btn>
      </div>       
        
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
  name: "Jewelery",
  
 
  data: () => {
    return {
      loading: false,
      selection: 1,
     jewelerys:[],
    };
  },
 //Api Calling
  mounted(){
    Vue.axios.get("https://fakestoreapi.com/products/category/jewelery")
    .then((response) => {
      this.jewelerys =response.data,
      console.log( response.data)

    })
  },
   methods: {
    reserve() {
      this.loading = true;

      
    },
  },
};
</script>

<style scoped>

</style>