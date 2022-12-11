<template>
  <div>
    <GeneralNav />
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div
          class="content-wrapper d-flex align-items-stretch auth auth-img-bg"
        >
          <div class="row flex-grow">
            <div
              class="col-lg-6 d-flex align-items-center justify-content-center"
            >
              <div class="auth-form-transparent text-left p-3">
                <h4>Welcome back!</h4>
                <h6 class="font-weight-light">Happy to see you again!</h6>
                <form class="pt-3">
                  <div class="form-group">
                    <label for="username">Username</label>
                    <div class="input-group">
                      <div class="input-group-prepend bg-transparent">
                        <span
                          class="input-group-text bg-transparent border-right-0"
                        >
                          <i class="fa fa-user text-primary"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control form-control-lg border-left-0"
                        v-model="userName"
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword">Password</label>
                    <div class="input-group">
                      <div class="input-group-prepend bg-transparent">
                        <span
                          class="input-group-text bg-transparent border-right-0"
                        >
                          <i class="fa fa-lock text-primary"></i>
                        </span>
                      </div>
                      <input
                        type="password"
                        class="form-control form-control-lg border-left-0"
                        v-model="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div
                    class="my-2 d-flex justify-content-between align-items-center"
                  >
                    <div class="form-check">
                      <label class="form-check-label text-muted">
                        <input type="checkbox" class="form-check-input" />
                        Keep me signed in
                      </label>
                    </div>
                    <a href="#" class="auth-link text-black"
                      >Forgot password?</a
                    >
                  </div>
                  <div class="my-3">
                    <button
                      @click.prevent="login"
                      class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                    >
                      LOGIN
                    </button>
                  </div>
                  <div class="mb-2 d-flex">
                    <button
                      type="button"
                      class="btn btn-facebook auth-form-btn flex-grow mr-1"
                    >
                      <i class="fab fa-facebook-f mr-2"></i>Facebook
                    </button>
                    <button
                      type="button"
                      class="btn btn-google auth-form-btn flex-grow ml-1"
                    >
                      <i class="fab fa-google mr-2"></i>Google
                    </button>
                  </div>
                  <div class="text-center mt-4 font-weight-light">
                    Don't have an account?
                    <router-link to="/signup">Create</router-link>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-6 login-half-bg d-flex flex-row">
              <p
                class="text-white font-weight-medium text-center flex-grow align-self-end"
              >
                Copyright &copy; 2018 All rights reserved.
              </p>
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
import Swal from "sweetalert2";
import PouchDB from "pouchdb";
const db = new PouchDB("softdevzdb");

export default {
  mounted() {
    console.log(localStorage.getItem("ownerId"));

    //       db.allDocs({
    //   include_docs: true,
    //   attachments: true
    // }).then(function (result) {
    //   console.log(JSON.stringify(result));
    //    res.json({"users": result.rows});
    // }).catch(function (err) {
    //   console.log(err);
    // });
  },

  data() {
    return {
      userName: "",
      password: "",
      // id:'',
    };
  },

  // LOGIN METHOD
  methods: {

    login() { 
    
    const ids = []; 
  
   db.allDocs() 
    .then((doc) => { 
         for (let i = 0; i < doc.rows.length; i++) { 
             ids[i] = doc.rows[i].id; 

} 

 for (let j = 0; j < ids.length; j++) { 
        db.get(ids[j]).then((doc) => { 
            if (doc.username == this.userName && doc.password == this.password) { 
                if (doc.hasregistered==true) { 
                    //  this.userName = doc.username, 
                     Swal.fire("Login Successful"); 
                //  window.location.href = "/dashboard"; 
                }
                else if(doc.hasregistered==false){ 
                    // window.location.href = "/"; 
                    // Swal.fire(""); 
                    console.log("this should lead to profile edit page")
                    window.location.href = "/dashboard"; 
                } 
             } else{

             }
            }); 
         } 
        }) 
         .catch(function (err) { 
            console.log(err);
        }); 
    },
    // login() {
    //   console.log(localStorage.getItem("ownerId"));

    //   db.allDocs({
    //     include_docs: true,
    //     attachments: true,
    //   })
    //     .then((doc) => {
    //       console.log(JSON.stringify(doc))
          


    //      })
    //     .catch(function (err) {
    //       console.log(err);
    //     });
    // },
  },
};
</script>
