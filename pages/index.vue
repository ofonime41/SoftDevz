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

        <Main/>
        <!-- Footer -->
        <Footer/>
      </div>
      

      
    </div>
    <!-- page-body-wrapper ends -->
  </div>

 </div>
</template>

<style>
/* @import '~/assets/fontawesome/css/all.css' */
</style>
<script>
export default {
  name: 'IndexPage'
}
</script>
