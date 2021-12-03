<!----------------------------------My Homepage----------------------------------------------->
<template>
   <v-app >
    <v-app-bar 
      app
      color="indigo lighten-5"
    
    >
  
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
 <v-toolbar-title
        style="width: 350px"
      >
        <a  style="text-decoration: none"><v-icon  color="blue" >mdi-aws</v-icon>&nbsp;Zomato</a>
      </v-toolbar-title>
 <v-spacer></v-spacer>

   
      <v-btn >
<router-link to="/profile">     <v-icon color="blue" >mdi-account-box</v-icon>
</router-link>   
      </v-btn>
   
      <v-btn >
    <router-link to="/cart"> 
          <v-icon  color="blue">mdi-cart-check</v-icon>
       </router-link>  
      </v-btn>
         <v-btn >

          <v-icon color="blue" @click="logout">mdi-logout-variant</v-icon>
      
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
    app
      
      temporary
      color="indigo lighten-5"
     
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        > <p >Products List</p>
        <v-divider></v-divider>
          <v-list-item>
           <router-link to="/jewellery"> <v-list-item-title>Jewellery</v-list-item-title></router-link>
          </v-list-item>
            
            <v-list-item>
           <router-link to="/electronics"> <v-list-item-title>Electronics</v-list-item-title></router-link>
          </v-list-item>
            

           <v-list-item>
           <router-link to="/mens"> <v-list-item-title>Men's Clothing</v-list-item-title></router-link>
          </v-list-item>
            
           <v-list-item>
           <router-link to="/womens"> <v-list-item-title>Women's Clothing</v-list-item-title></router-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
     <v-responsive>  <v-carousel  show-arrows-on-hover 
        reverse-transition="fade-transition"
        transition="fade-transition">
           <v-responsive> <v-carousel-item
              :src="require('../assets/home/slider_1.jpg')"
            >
            </v-carousel-item></v-responsive>
           <v-responsive> <v-carousel-item
              :src="require('../assets/home/slideg1.jpg')"
            >
            </v-carousel-item></v-responsive>
           <v-responsive> <v-carousel-item
              :src="require('../assets/home/slideg4.jpg')"
            >
            </v-carousel-item></v-responsive>
           <v-responsive> <v-carousel-item
              :src="require('../assets/home/slidem2.jpg')"
            >
            </v-carousel-item></v-responsive>
           <v-responsive><v-carousel-item
              :src="require('../assets/home/slideg3.jpg')"
            >
            </v-carousel-item></v-responsive>
          </v-carousel>
          </v-responsive> 
          <ProductList/>
          
          <v-footer
      :padless="true"
      class="mt-12 mx-auto"
    >
      <v-card
        class="text-center"
         color="indigo"
      >
       
        <v-card-text class="white--text ">
Welcome to Zomato, your number one source for all things [product, ie: shoes, bags, Jewellary and garments]. We're dedicated to giving you the very best of products with a focus on three characteristics, ie: dependability, customer service and uniqueness.
Zomato has come a long way from its beginnings . We now serve customers all over the world and are thrilled to be a part of the eco-friendly, fair trade wing of the fashion industry.
We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.

        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Zomato</strong>
        </v-card-text>
      </v-card>
    </v-footer>
        
 
   </v-app>
   
</template>
<script>
import ProductList from "../components/ProductList.vue";
  export default {
    name:"Dashboard",
     components: {
      ProductList,
     
    },
    data: () => ({
      drawer: false,
      group: null,
       user: "",
    }),
  
  

  methods: {
    logout() {

      this.$router.push("/");
     
    },
  },

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>