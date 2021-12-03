<!--------------------------------------------------------------------------------->
<template>
  <v-app>
    <h1 align="center">Women's clothing</h1>
    <v-spacer></v-spacer>
     <v-card class="d-flex flex-row flex-wrap ">
    <v-card
    
    class="mx-auto my-12"
    max-width="374"
    v-for="womenclothing in womenclothings" :key='womenclothing.id'
  > 
      <v-img contain height="250" :src="womenclothing.image"> 
      </v-img>
     
      <v-card-title class="text fontSize black--text">{{ womenclothing.title }}</v-card-title>

      <v-card-text class="mb-8">
        <v-row align="center" class="mx-0"> </v-row>
        <div class="my-4 text-subtitle-1">{{ womenclothing.category}}
        <div class="my-4 text-subtitle-1">{{ womenclothing.price }}</div></div>
      </v-card-text>

      <v-spacer></v-spacer>
      <v-btn class="ma-2"  outlined color="indigo"> + Add to Cart </v-btn>
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
  name: "womenclothing",
 
  data: () => {
    return {
      loading: false,
      selection: 1,
     womenclothings:[],
    };
  },
 //Calling Data from Api
  mounted(){
    Vue.axios.get("https://fakestoreapi.com/products/category/women's clothing")
    .then((response) => {
      this.womenclothings =response.data,
      console.log( response.data)

    })
  },
  
};
</script>

<style scoped>

</style>