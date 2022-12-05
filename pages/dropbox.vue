<template>
     <div>
  <div class="container-scroller">
    <!-- Navbar -->
    <Navbar/>
    <div class="container-fluid page-body-wrapper">
      <!-- PAGE COLOR SETTING -->
      <ThemeSetting/>
     
      <!-- SIDE BARS -->
      <SideNav/>

      <!-- MAIN -->
      <div class="main-panel">

        <div class="content-wrapper">
          <div class="row">
            <div class="col-lg-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Your so fresh input file — Default version</h4>
                  <input type="file" class="dropify" />
                </div>
              </div>
            </div>
            <div class="col-lg-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">You can add a default value</h4>
                  <input type="file" class="dropify" data-default-file="http://www.urbanui.com/" />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">You can set the height</h4>
                  <input type="file" class="dropify" data-height="300" />
                </div>
              </div>
            </div>
            <div class="col-lg-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">You can combine options</h4>
                  <input type="file" class="dropify" data-height="300" data-default-file="http://www.urbanui.com/" />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">You can add a max file size</h4>
                  <input type="file" class="dropify" data-max-file-size="30kb" />
                </div>
              </div>
            </div>
            <div class="col-lg-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">You can disable the input</h4>
                  <input type="file" class="dropify" disabled="disabled" />
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <!-- Footer -->
        <Footer/>
      </div>
      

      
    </div>
    <!-- page-body-wrapper ends -->
  </div>

 </div>
</template>

<script>
    export default {
  mounted(){
    let dropify = document.createElement('script');
   dropify .setAttribute("src", "/js/dropify.js");
   dropify .setAttribute("defer", "true");
    document.body.appendChild(dropify);
  },
  
}

</script>