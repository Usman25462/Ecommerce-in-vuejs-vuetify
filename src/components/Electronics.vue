<!--------------------------------------------------------------------------------->
<template>
  <v-app><h1 align="center">Electronics</h1>
  <v-spacer></v-spacer>
    <v-card class="d-flex flex-row flex-wrap">
    <v-card id="my-card" class="mx-auto my-12" max-width="270"  v-for="electronic in electronics" :key='electronic.id'>
      <v-img contain height="250" :src="electronic.image">
      </v-img>
      <v-card-title>
        {{ electronic.title }}</v-card-title>

      <v-card-text class="mb-8">
        <v-row align="center" class="mx-0"> </v-row>
        <div class="my-4 text-subtitle-1">{{ electronic.category }}
        <div class="mb-8 text-subtitle-1 red--text">${{ electronic.price }}</div></div>
      </v-card-text>

      <v-spacer></v-spacer>
      <v-btn class="mx-2" absolute bottom outlined color="indigo"> + Add to Cart </v-btn>
             
    </v-card>
    </v-card>-
  </v-app>
</template>

<!--------------------------------------------------------------------------------->
<script>
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios,axios)

export default {
  name: "Electronic",

  data: () => {
    return {
      loading: false,
      selection: 1,
     electronics:[],
    };
  },
 // Api Calling
  mounted(){
    Vue.axios.get("https://fakestoreapi.com/products/category/electronics")
    .then((response) => {
      this.electronics =response.data,
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