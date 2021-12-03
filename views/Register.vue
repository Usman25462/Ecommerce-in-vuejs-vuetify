<!---------------------------------Registration Of User------------------------------------------------>
<template>
 
 <v-app>
    <v-main class="d-flex justify-center align-center">
      <v-col cols="10" lg="4" class="mx-auto">
        <v-card class="pa-4">
          <div class="text-center">
            <v-avatar size="100" color="indigo lighten-4">
              <v-icon size="40" color="indigo">mdi-account</v-icon>
            </v-avatar>
            <h1 class="indigo--text">Registration</h1>
          </div>
          <v-form @submit.prevent="submitHandler" ref="form">
            <v-card-text>
              <v-text-field
                append-icon="mdi-pencil-outline" 
                v-model="firstName"
                :rules="firstNameRules"
                color="blue darken-2"
                label="First name"
                placeholder="First Name"
              ></v-text-field>

              <v-text-field
                append-icon="mdi-pencil-outline"
                v-model="lastName"
                :rules="lastNameRules"
                color="blue darken-2"
                label="Last name"
                placeholder="Last Name"
              ></v-text-field>
              <v-text-field
                append-icon="mdi-account"
                v-model="userName"
                :rules="userNameRules"
                color="blue darken-2"
                label="Username"
                placeholder="Username"
              ></v-text-field>

              <v-text-field
                append-icon="mdi-email"
                v-model="email"
                :rules="emailRules"
                type="email"
                label="Email"
                placeholder="Enter Email"
               
              />
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                :type="passwordShow ? 'text' : 'password'"
                label="Password"
                placeholder="Enter password"
            
                
              />
              <v-text-field
                append-icon="mdi-phone"
                v-model="number"
                :rules="number"
                type="text"
                label="Phone No."
                placeholder="Enter Phone No."
                
              />
               <p class="mt-5 font-weight-light">
                By proceeding, you agree to the
                <a href="#">Terms and conditions</a>
              </p>
              
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn block color="indigo" class="mr-4" @click="storeData">
                     
                      <span>Sign Up</span>
                    </v-btn>
        
            </v-card-actions>
            
                    <br /><br />
                    <span>Already have an account ?</span>
                    <span
                      ><router-link class="forLinks" to="/">
                        Log In
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
  firstNameRules,
  lastNameRules,
  emailRules,
  userNameRules,
  passwordRules,
  numberRules,
  
} from '../constant/const.js'

export default {
  name: 'Register',

  data() {
    return {
      valid: true,
      firstNameRules: firstNameRules,
      lastNameRules:lastNameRules,
      emailRules: emailRules,
      userNameRules: userNameRules,
      numberRules: numberRules,
      passwordRules: passwordRules,
     

      firstName: '',
      lastName:'',
      email: '',
      userName: '',
      phoneNumber: '',
      password: '',
      newUser: [],
    }
  },
  created() {
    this.newUser = JSON.parse(localStorage.getItem('newUser') || '[]')
  },

  methods: {
    storeData() {
      if (this.$refs.form.validate()) {
        let user = {
          firstName: this.firstName,
          lastName: this.lastName,
          userName: this.userName,
          email: this.email,
          password: this.password,
        }
        this.newUser.push(user)
        localStorage.setItem('newUser', JSON.stringify(this.newUser))
        this.$router.push({ name: 'Login' })
      } else {
        ('Kindly Fill All The Fields.')
      }
    },
  },
}
</script>