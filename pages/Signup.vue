<template>
   <div>
    <!-- <div class="se-pre-con"></div> -->

    <!-- General nav start -->
    <GeneralNav/>

    
    <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-stretch auth auth-img-bg">
        <div class="row flex-grow">
          <div class="col-lg-6 d-flex align-items-center justify-content-center">
            <div class="auth-form-transparent text-left p-3">
              <h4>New here?</h4>
              <h6 class="font-weight-light">Join us today! It takes only few steps</h6>
              <!-- Form -->
              <form class="pt-3" @submit.prevent="register"  method="POST">
                <div class="form-group">
                  <label>Username</label>
                  <div class="input-group">
                    <div class="input-group-prepend bg-transparent">
                      <span class="input-group-text bg-transparent border-right-0">
                        <i class="fa fa-user text-primary"></i>
                      </span>
                    </div>
                    <input type="text" v-model="userName" class="form-control form-control-lg border-left-0" placeholder="Username">
                  </div>
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <div class="input-group">
                    <div class="input-group-prepend bg-transparent">
                      <span class="input-group-text bg-transparent border-right-0">
                        <i class="far fa-envelope-open text-primary"></i>
                      </span>
                    </div>
                    <input type="email" v-model="email" class="form-control form-control-lg border-left-0" placeholder="Email">
                  </div>
                </div>
                <!-- <div class="form-group">
                  <label>Country</label>
                  <select class="form-control form-control-lg" id="exampleFormControlSelect2">
                    <option>Country</option>
                    <option>United States of America</option>
                    <option>United Kingdom</option>
                    <option>India</option>
                    <option>Germany</option>
                    <option>Argentina</option>
                  </select>
                </div> -->
                <div class="form-group">
                  <label>Password</label>
                  <div class="input-group">
                    <div class="input-group-prepend bg-transparent">
                      <span class="input-group-text bg-transparent border-right-0">
                        <i class="fa fa-lock text-primary"></i>
                      </span>
                    </div>
                    <input type="password" v-model="password" class="form-control form-control-lg border-left-0" id="exampleInputPassword" placeholder="Password">                        
                  </div>
                </div>
                <div class="mb-4">
                  <div class="form-check">
                    <label class="form-check-label text-muted">
                      <input type="checkbox" class="form-check-input">
                      I agree to all Terms & Conditions
                    </label>
                  </div>
                </div>
                <div class="mt-3">
                  <button  class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">SIGN UP</button>
                </div>
                <div class="text-center mt-4 font-weight-light">
                  Already have an account? <a href="/signin" class="text-primary">Login</a>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-6 register-half-bg d-flex flex-row">
            <p class="text-white font-weight-medium text-center flex-grow align-self-end">Copyright &copy; 2018  All rights reserved.</p>
          </div>
        </div>
      </div>
      <!-- content-wrapper ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
    
    </div>

</template>

<script>
import Swal from 'sweetalert2';
import PouchDB from 'pouchdb';
const db = new PouchDB('softdevzdb');


export default {
  data(){
    return{
      userName:'',
      email:'',
      password:'',
    }
    

  },

  methods: {
    // METHOD TO Genrate  ID
    generateId(length = 10) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random()*charactersLength));
  }
 return result;
 },

 swalz() {
        Swal.fire({
            position: "bottom",
            text: "Registration successful",
            width: 500,
             color: "#ffff",
             background: "green",
             showConfirmButton: false,
             timer: 1500,
            });
         },
    // REGISTRATION METHOD
    register(){
      if(this.userName == "" || this.email == "" || this.password == ""){
        Swal.fire("Please fill up your details correctly");
      }else{

          // serid to the generated id
          var Regalert =this.swalz();
        var userId = this.generateId(); 
            localStorage.setItem('ownerId', JSON.stringify(userId));

            db.put({
              _id : userId,
                 title: "users",
                 username: this.userName,
                 email: this.email,
                 password: this.password,
                 hasregistered: false,
            }).then(function (response) {
              Regalert;
              window.location.href="/signin";
                     console.log(response)
            }).catch(function (err) {
                console.log(err);
            });
            
      }
     
    }
  },

}

</script>

<style>
</style>

