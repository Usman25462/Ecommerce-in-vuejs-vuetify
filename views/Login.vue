<!-----------------------------------Login User---------------------------------------------->
<template>
  <v-app id="app">
   <v-main class="d-flex justify-center align-center">
      <v-col cols="10" lg="4" class="mx-auto">
        <v-card class="pa-4">
          <div class="text-center">
            <v-avatar size="100" color="indigo lighten-4">
              <v-icon size="40" color="indigo">mdi-account</v-icon>
            </v-avatar>
            <h1 class="indigo--text">Login Here</h1>
          </div>
                    <v-form ref="form" v-model="valid" lazy-validation>
                      <v-text-field
                        :rules="userNameRules"
                        label="Username"
                        v-model="userName"
                        type="text"
                      ></v-text-field>
                      <v-text-field
                        :rules="passwordRules"
                        label="Password"
                        v-model="password"
                        type="password"
                        required
                      ></v-text-field>
                     
                      <div class="text-center mt-3">
                        <v-btn
                          color="indigo"
                          class="mr-4"
                          @click="registerUser"
                          >
                          Login
                        </v-btn>
                      </div>
                      <br /><br />
                    <span>Dont Have account ?</span>
                    <span
                      ><router-link class="forLinks" to="/register">
                        Register Now
                      </router-link></span
                    >
                      </v-form>
                    </v-card>
      </v-col>
    </v-main>
                
  </v-app>
</template>
<script>
import {
  userNameRules,
  passwordRules,
  
} from '@/constant/const.js'
export default {
  data: () => ({
    valid: true,
    userNameRules: userNameRules,
    passwordRules: passwordRules,
   
    userName: '',
    password: '',
    newUser: [],
  }),
  methods: {
    registerUser() {
      this.newUser = JSON.parse(localStorage.getItem('newUser'))
      console.log(this.newUser)
      this.registerUser = this.newUser.find((a) => {
        return a.userName == this.userName && a.password == this.password
      })
      if (this.registerUser) {
        (this.$store.state.authenticated = true)
          this.$router.push({ name: 'Dashboard' })
        localStorage.setItem('registerUser', JSON.stringify(this.registerUser))
      } else {
        alert('Account does not exist')
      }
    },
  },
}
</script>