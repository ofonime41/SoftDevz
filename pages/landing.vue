<template>
    <div data-spy="scroll" data-target=".navbar" data-offset="60">
    <!-- <div class="se-pre-con"></div> -->

    <!-- main nav start -->

    <nav class="navbar navbar-expand-lg fixed-top static-nav">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="/landing/img/logo.png" alt="logo" class="logo-default">
            </a>
            <button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#xenav">
                <i class="fas fa-bars fa-2x"></i>
            </button>
            <div class="collapse navbar-collapse" id="xenav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#home">home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">about</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#feature">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#previews">previews</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#blog">blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">contact</a>
                    </li>
               
                </ul>
            </div>
        </div>
        <!--/.CONTAINER-->

    </nav>
    <!-- /.navbar -->

    <!--banner-->
    <header class="banner_sec" id="home">
        <div class="container">
            <div class="row">
                <div class="col-md-10 offset-md-1">
                    <div class="banner_inside">
                        <h1 class="mx-5 text-white">Connecting Inventors and Investors made Easy!</h1>
                        <h5 class="mx-5 text-white mt-5">Softdevz is a platform that enables  developers pitch their viable ideas or 
                            products to potential investors for funding.
                        </h5>
                    </div><!--/.banner_inside-->
                </div>   
            </div>
            
            <!-- FUN FACT -->
            <div  class="fun_fact row mt-8">
                <div class="col-md-3">
                    <div class="fun_single">
                        <img src="img/icon/fun1.png" alt=""/>
                        <h2><span class="counter">118</span>K</h2>
                        <h4>Happy Users</h4>
                    </div><!--/.fun_single-->
                </div>
                <div class="col-md-3">
                    <div class="fun_single">
                        <img src="img/icon/fun2.png" alt=""/>
                        <h2><span class="counter">310</span></h2>
                        <h4>Projects/Ideas</h4>
                    </div><!--/.fun_single-->
                </div>
                <div class="col-md-3">
                    <div class="fun_single">
                        <img src="img/icon/fun3.png" alt=""/>
                        <h2><span class="counter">50</span></h2>
                        <h4>Investors</h4>
                    </div><!--/.fun_single-->
                </div>
                <div class="col-md-3">
                    <div class="fun_single">
                        <img src="img/icon/fun4.png" alt=""/>
                        <h2><span class="counter">18</span></h2>
                        <h4>Funded Project</h4>
                    </div><!--/.fun_single-->
                </div>
            </div>
             <!-- /FUN FACT -->

        </div><!--/.container-->
        <div class="triangle-holder">
            <div class="triangle-1"></div>
            <div class="triangle-2"></div>
         </div><!--/triangle-->
    </header>
    <!--/.banner-->


    <!--Categories-->
              
        <div class="content-wrapper">
         
          <div class="card-columns">
            <router-link to="">
                <div class="card">
              <div class="card-body">
                <h3 class="text-center mb-3">Software Projects</h3>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis quam, aperiam!</p>
              </div>
              <img class="card-img-top" src="/images/samples/300x300/31.jpg" alt="Card image cap">
            </div>
            </router-link>

            <router-link to="">
                <div class="card">
              <div class="card-body">
                <h3 class="text-center mb-3">Hardware Projects</h3>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis quam, aperiam!</p>
              </div>
              <img class="card-img-top" src="/images/samples/300x300/31.jpg" alt="Card image cap">
            </div>
            </router-link>

            <router-link to="">
                <div class="card">
              <div class="card-body">
                <h3 class="text-center mb-3">Artificial Intelligence</h3>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis quam, aperiam!</p>
              </div>
              <img class="card-img-top" src="/images/samples/300x300/31.jpg" alt="Card image cap">
            </div>
            </router-link>
           
            
          </div>
        </div>

   


    <!--footer-->
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-left">
                    <div class="copy_text">
                        <p>Softdevz 2022</p>
                    </div>
                </div>
                <div class="col-md-6 text-right">
                    <ul class="footer_social">
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </div><!--/.container-->
    </footer>
    <!--/.footer-->


    <script src="js/jquery-1.12.4.min.js"></script>
    <script src="js/vendor/bootstrap.min.js"></script>
    <script src="js/vendor/popper.min.js"></script>
    <script src="js/vendor/plugin.js"></script>
    <script src="js/main.js"></script>

</div>
</template>