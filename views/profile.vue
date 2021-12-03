<template>
<v-app>
  <v-container>
    <Navbar/>
    <v-row>
      <v-col>
        <h1>User Profile</h1>

        <div>
          <h3 class="text-center p-3">Welcome to Profile Page</h3>

        
          <div>
            <v-card
              max-width="500px"
              class="mx-auto text-danger "
              
              style="margin-top: 50px"
            >
              <v-col cols="6" sm="6" xsm="6" lg="6" md="6">
                Your First Name : {{ firstName }}
              </v-col>
               <v-col cols="6" sm="6" xsm="6" lg="6" md="6">
                Your Last Name : {{ lastName}}
              </v-col>
              <v-col cols="6" sm="6" xsm="6" lg="6" md="6">
                <strong> Your User Name : {{ userName }}</strong>
              </v-col>
              <v-col>
                <strong> Your Email : {{ email }}</strong>
              </v-col>
              <v-col cols="6" sm="6" xsm="6" lg="6" md="6">
                <strong> Your Password : {{ password }}</strong>
              </v-col>
            </v-card>
           
          </div>
        
        </div>
      </v-col>
    </v-row>
  </v-container>
  

  </v-app>
</template>
<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: 'Profile',
  components:{
    Navbar
  },
  data() {
    return {
      valid: true,
      firstName: '',
      userName: '',
      email: '',
      phoneNumber:'',
      password: '',
      registerUser: [],
    }
  },
  created() {
    this.registerUser = JSON.parse(localStorage.getItem('registerUser'))
    this.firstName = this.registerUser.firstName
    this.lastName = this.registerUser.lastName
    this.userName = this.registerUser.userName
    this.email = this.registerUser.email
    this.phoneNumber=this.registerUser.phoneNumber
    this.password = this.registerUser.password
  },
  methods: {
    updateProfile() {
      this.newUser = JSON.parse(localStorage.getItem('newUser'))
      this.index = this.newUser.findIndex((x) => x.email == this.e)
      this.newUser[this.index] = {
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password,
        userName: this.userName,
      }
      localStorage.setItem('newUser', JSON.stringify(this.newUser))
      localStorage.setItem(
        'registerUser',
        JSON.stringify(this.newUser[this.index])
      )
    },
  },
}
</script>