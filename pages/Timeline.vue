<template>
    <div class="container-scroller">
    <!-- NAVBAR -->
    <Navbar/>
   
    <div class="container-fluid page-body-wrapper">
      <!-- THEME SETTING -->
      <ThemeSetting/>
      
       <!-- SIDE BARS -->
       <SideNav/>
       
      <!-- MAIN-->
      <div class="main-panel">          
        <div class="content-wrapper">
          <div class="page-header">
            <h3 class="page-title">
              Timeline
            </h3>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Sample pages</a></li>
                <li class="breadcrumb-item active" aria-current="page">Timeline</li>
              </ol>
            </nav>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Timeline</h4>
                  <p class="card-description">A simple timeline</p>
                  <div class="mt-5">
                    <div class="timeline">
                      <div class="timeline-wrapper timeline-wrapper-warning">
                        <div class="timeline-badge"></div>
                        <div class="timeline-panel">
                          <div class="timeline-heading">
                            <h6 class="timeline-title">Bootstrap 4 Beta</h6>
                          </div>
                          <div class="timeline-body">
                            <p>Two years in the making, we finally have our first beta release of Bootstrap 4.</p>
                          </div>
                          <div class="timeline-footer d-flex align-items-center">
                              <i class="far fa-heart text-muted mr-1"></i>
                              <span>19</span>
                              <span class="ml-auto font-weight-bold">19 Oct 2017</span>
                          </div>
                        </div>
                      </div>
                      <div class="timeline-wrapper timeline-inverted timeline-wrapper-danger">
                        <div class="timeline-badge"></div>
                        <div class="timeline-panel">
                          <div class="timeline-heading">
                            <h6 class="timeline-title">Bootstrap 4 Alpha 6</h6>
                          </div>
                          <div class="timeline-body">
                            <p>Alpha 6 has landed, and it???s one of our biggest ships to date.</p>
                          </div>
                          <div class="timeline-footer d-flex align-items-center">
                              <i class="far fa-heart text-muted mr-1"></i>
                              <span>25</span>
                              <span class="ml-auto font-weight-bold">10th Aug 2017</span>
                          </div>
                        </div>
                      </div>
                      <div class="timeline-wrapper timeline-wrapper-success">
                        <div class="timeline-badge"></div>
                        <div class="timeline-panel">
                          <div class="timeline-heading">
                            <h6 class="timeline-title">Bootstrap 4 Alpha 5</h6>
                          </div>
                          <div class="timeline-body">
                            <p>Alpha 5 has arrived just over a month after Alpha 4 with some major feature improvements and a boat load of bug fixes.</p>
                          </div>
                          <div class="timeline-footer d-flex align-items-center">
                              <i class="far fa-heart text-muted mr-1"></i>
                              <span>19</span>
                              <span class="ml-auto font-weight-bold">5th Sep 2016</span>
                          </div>
                        </div>
                      </div>
                      <div class="timeline-wrapper timeline-inverted timeline-wrapper-info">
                        <div class="timeline-badge"></div>
                        <div class="timeline-panel">
                          <div class="timeline-heading">
                            <h6 class="timeline-title">Bootstrap 4 Alpha 4</h6>
                          </div>
                          <div class="timeline-body">
                            <p>Alpha 4 is here to address those pesky build and package errors, a few CSS bugs, and some documentation inconsistencies we introduced in our last release.</p>
                          </div>
                          <div class="timeline-footer d-flex align-items-center">
                              <i class="far fa-heart text-muted mr-1"></i>
                              <span>19</span>
                              <span class="ml-auto font-weight-bold">27th July 2016</span>
                          </div>
                        </div>
                      </div>
                      <div class="timeline-wrapper timeline-wrapper-primary">
                        <div class="timeline-badge"></div>
                        <div class="timeline-panel">
                          <div class="timeline-heading">
                            <h6 class="timeline-title">Bootstrap 4 Alpha 3</h6>
                          </div>
                          <div class="timeline-body">
                            <p>Alpha 3 has landed! We have an overhauled grid, updated form controls, a new font stack, tons of bug fixes, and more.</p>
                          </div>
                          <div class="timeline-footer d-flex align-items-center">
                              <i class="far fa-heart text-muted mr-1"></i>
                              <span>25</span>
                              <span class="ml-auto font-weight-bold">25th July 2016</span>
                          </div>
                        </div>
                      </div>
                      <div class="timeline-wrapper timeline-inverted timeline-wrapper-info">
                        <div class="timeline-badge"></div>
                        <div class="timeline-panel">
                          <div class="timeline-heading">
                            <h6 class="timeline-title">Bootstrap 4 Alpha 2</h6>
                          </div>
                          <div class="timeline-body">
                            <p>The general plan for v4???s development starts with a few alpha releases. We???re a little behind on that, but should be getting caught up as the year winds down.</p>
                          </div>
                          <div class="timeline-footer d-flex align-items-center">
                              <i class="far fa-heart text-muted mr-1"></i>
                              <span>32</span>
                              <span class="ml-auto font-weight-bold">19th Aug 2015</span>
                          </div>
                        </div>
                      </div>
                      <div class="timeline-wrapper timeline-wrapper-success">
                        <div class="timeline-badge"></div>
                        <div class="timeline-panel">
                          <div class="timeline-heading">
                            <h6 class="timeline-title">Bootstrap 4 alpha 1</h6>
                          </div>
                          <div class="timeline-body">
                            <p>Bootstrap 4 has been a massive undertaking that touches nearly every line of code.</p>
                          </div>
                          <div class="timeline-footer d-flex align-items-center">
                              <i class="far fa-heart text-muted mr-1"></i>
                              <span>26</span>
                              <span class="ml-auto font-weight-bold">15th Jun 2015</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
        <!-- footer -->
      
        <Footer/>

        <!-- partial -->
      </div>
      <!-- main-panel ends -->
    </div>
    
  </div>
</template>