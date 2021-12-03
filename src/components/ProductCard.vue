<!--------------------------------All Products card design------------------------------------------------->
<template>
  <v-card id="my-card" class="mx-auto my-12" max-width="270">
    <v-img contain height="250" :src="product.image"> </v-img>

    <v-card-title
      ><router-link
        class="text fontSize black--text"
        :to="{ name: 'product', params: { id: product.id } }"
        >{{ product.title }}</router-link
      >
    </v-card-title>

    <v-card-text class="mb-8">
      <v-row align="center" class="mx-0"> </v-row>
    <div class="my-4 text-subtitle-1">{{ product.category }}
      <div class="mb-8 text-subtitle-1 red--text">${{ product.price }}</div></div>
    </v-card-text>

    <v-spacer></v-spacer>
    <v-btn class="ma-2" absolute bottom outlined color="indigo" @click="addToCart()">
      + Add to Cart
    </v-btn>
  </v-card>
</template>

<!--------------------------------------------------------------------------------->
<script>
export default {
  name: "productcard",
  props: ["product"],
  data: () => {
    return {
      loading: false,
      selection: 1,
    };
  },
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: 1,
      });
    },
  },
};
</script>

<style scoped>
</style>