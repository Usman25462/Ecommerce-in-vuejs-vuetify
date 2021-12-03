<template>

       <v-app-bar 
      app
      color="indigo lighten-5"
    
    >

   
          <v-list-item>
           <router-link to="/dashboard"> <v-list-item-title><v-btn class="blue--text">Home</v-btn></v-list-item-title></router-link>
          </v-list-item>  
          <v-list-item>
           <router-link to="/jewellery"> <v-list-item-title><v-btn class="blue--text">Jewellery</v-btn></v-list-item-title></router-link>
          </v-list-item>

        
            <v-list-item>
           <router-link to="/electronics"> <v-list-item-title><v-btn class="blue--text">Electronics</v-btn></v-list-item-title></router-link>
          </v-list-item>
            

           <v-list-item>
           <router-link to="/mens"> <v-list-item-title  ><v-btn class="blue--text">Men's Clothing</v-btn></v-list-item-title></router-link>
          </v-list-item>
            
           <v-list-item >
           <router-link to="/womens"> <v-list-item-title><v-btn class="blue--text"> Women's Clothing</v-btn></v-list-item-title></router-link>
          </v-list-item>
       
      <v-spacer />
     <v-btn >
<router-link to="profile">     <v-icon color="blue" >mdi-account-box</v-icon>
</router-link>   
      </v-btn>
   
      <v-btn >
    <router-link to="cart">  
          <v-icon  color="blue">mdi-cart-check</v-icon></router-link>  
       
      </v-btn>
         <v-btn >

          <v-icon color="blue" @click="logout">mdi-logout-variant</v-icon>
      
      </v-btn>

   

  </v-app-bar>
</template>

<script>
export default {
    methods:{
      logout(){
        this.$router.push({name: "/"})
      }
    }

}
</script>

