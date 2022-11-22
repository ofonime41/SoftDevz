<template>
  <div>
    <!-- <div id="right-sidebar" class="settings-panel">
      <i class="settings-close fa fa-times"></i>
      <ul class="nav nav-tabs" id="setting-panel" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="todo-tab" data-toggle="tab" href="#todo-section" role="tab"
            aria-controls="todo-section" aria-expanded="true">TO DO LIST</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="chats-tab" data-toggle="tab" href="#chats-section" role="tab"
            aria-controls="chats-section">CHATS</a>
        </li>
      </ul>
      <div class="tab-content" id="setting-content">
        <div class="tab-pane fade show active scroll-wrapper" id="todo-section" role="tabpanel"
          aria-labelledby="todo-section">
          <div class="add-items d-flex px-3 mb-0">
            <form class="form w-100">
              <div class="form-group d-flex">
                <input type="text" class="form-control todo-list-input" placeholder="Add To-do">
                <button type="submit" class="add btn btn-primary todo-list-add-btn" id="add-task-todo">Add</button>
              </div>
            </form>
          </div>
          <div class="list-wrapper px-3">
            <ul class="d-flex flex-column-reverse todo-list">
              <li>
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="checkbox" type="checkbox">
                    Team review meeting at 3.00 PM
                  </label>
                </div>
                <i class="remove fa fa-times-circle"></i>
              </li>
              <li>
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="checkbox" type="checkbox">
                    Prepare for presentation
                  </label>
                </div>
                <i class="remove fa fa-times-circle"></i>
              </li>
              <li>
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="checkbox" type="checkbox">
                    Resolve all the low priority tickets due today
                  </label>
                </div>
                <i class="remove fa fa-times-circle"></i>
              </li>
              <li class="completed">
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="checkbox" type="checkbox" checked>
                    Schedule meeting for next week
                  </label>
                </div>
                <i class="remove fa fa-times-circle"></i>
              </li>
              <li class="completed">
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="checkbox" type="checkbox" checked>
                    Project review
                  </label>
                </div>
                <i class="remove fa fa-times-circle"></i>
              </li>
            </ul>
          </div>
          <div class="events py-4 border-bottom px-3">
            <div class="wrapper d-flex mb-2">
              <i class="fa fa-times-circle text-primary mr-2"></i>
              <span>Feb 11 2018</span>
            </div>
            <p class="mb-0 font-weight-thin text-gray">Creating component page</p>
            <p class="text-gray mb-0">build a js based app</p>
          </div>
          <div class="events pt-4 px-3">
            <div class="wrapper d-flex mb-2">
              <i class="fa fa-times-circle text-primary mr-2"></i>
              <span>Feb 7 2018</span>
            </div>
            <p class="mb-0 font-weight-thin text-gray">Meeting with Alisa</p>
            <p class="text-gray mb-0 ">Call Sarah Graves</p>
          </div>
        </div>
    
        <div class="tab-pane fade" id="chats-section" role="tabpanel" aria-labelledby="chats-section">
          <div class="d-flex align-items-center justify-content-between border-bottom">
            <p class="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Friends</p>
            <small class="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal">See
              All</small>
          </div>
          <ul class="chat-list">
            <li class="list active">
              <div class="profile"><img src="images/faces/face1.jpg" alt="image"><span class="online"></span></div>
              <div class="info">
                <p>Thomas Douglas</p>
                <p>Available</p>
              </div>
              <small class="text-muted my-auto">19 min</small>
            </li>
            <li class="list">
              <div class="profile"><img src="images/faces/face2.jpg" alt="image"><span class="offline"></span></div>
              <div class="info">
                <div class="wrapper d-flex">
                  <p>Catherine</p>
                </div>
                <p>Away</p>
              </div>
              <div class="badge badge-success badge-pill my-auto mx-2">4</div>
              <small class="text-muted my-auto">23 min</small>
            </li>
            <li class="list">
              <div class="profile"><img src="images/faces/face3.jpg" alt="image"><span class="online"></span></div>
              <div class="info">
                <p>Daniel Russell</p>
                <p>Available</p>
              </div>
              <small class="text-muted my-auto">14 min</small>
            </li>
            <li class="list">
              <div class="profile"><img src="images/faces/face4.jpg" alt="image"><span class="offline"></span></div>
              <div class="info">
                <p>James Richardson</p>
                <p>Away</p>
              </div>
              <small class="text-muted my-auto">2 min</small>
            </li>
            <li class="list">
              <div class="profile"><img src="images/faces/face5.jpg" alt="image"><span class="online"></span></div>
              <div class="info">
                <p>Madeline Kennedy</p>
                <p>Available</p>
              </div>
              <small class="text-muted my-auto">5 min</small>
            </li>
            <li class="list">
              <div class="profile"><img src="images/faces/face6.jpg" alt="image"><span class="online"></span></div>
              <div class="info">
                <p>Sarah Graves</p>
                <p>Available</p>
              </div>
              <small class="text-muted my-auto">47 min</small>
            </li>
          </ul>
        </div>
      </div>
    </div> -->
    <!-- partial -->
    <!-- partial:partials/_sidebar.html -->

    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item nav-profile">
          <div class="nav-link">
            <div class="profile-image">
              <img src="images/faces/face5.jpg" alt="image" />
            </div>
            <div class="profile-name">
              <p class="name">
                Welcome Jane
              </p>
              <p class="designation">
                Super Admin
              </p>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <router-link to=""></router-link>
          <router-link to="/" class="nav-link">
            <i class="fa fa-home menu-icon"></i>
            <span class="menu-title">Dashboard</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Signup" class="nav-link" href="pages/widgets.html">
            <i class="fa fa-unlock menu-icon"></i>
            <span class="menu-title">Signup</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Signin" class="nav-link" href="pages/widgets.html">
            <i class="fas fa-unlock menu-icon"></i>
            <span class="menu-title">Signin</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/profile" class="nav-link" href="pages/widgets.html">
            <i class="fas fa-user menu-icon"></i>
            <span class="menu-title">Profile</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/portfolio" class="nav-link" href="pages/widgets.html">
            <i class="fas fa-user menu-icon"></i>
            <span class="menu-title">Portfolio</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Timeline" class="nav-link" href="pages/widgets.html">
            <i class="fas fa-user menu-icon"></i>
            <span class="menu-title">Timeline</span>
          </router-link>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link" href="pages/widgets.html">
            <i class="fa fa-puzzle-piece menu-icon"></i>
            <span class="menu-title">Widgets</span>
          </a>
        </li> -->
        <!-- <li class="nav-item">
          <a class="nav-link" data-toggle="collapse" href="#page-layouts" aria-expanded="false"
            aria-controls="page-layouts">
            <i class="fab fa-trello menu-icon"></i>
            <span class="menu-title">Page Layouts</span>
            <i class="menu-arrow"></i>
          </a>
          <div class="collapse" id="page-layouts">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item d-none d-lg-block"> <a class="nav-link"
                  href="pages/layout/boxed-layout.html">Boxed</a></li>
              <li class="nav-item"> <a class="nav-link" href="pages/layout/rtl-layout.html">RTL</a></li>
              <li class="nav-item d-none d-lg-block"> <a class="nav-link"
                  href="pages/layout/horizontal-menu.html">Horizontal Menu</a></li>
            </ul>
          </div>
        </li> -->
        <!-- <li class="nav-item d-none d-lg-block">
          <a class="nav-link" data-toggle="collapse" href="#sidebar-layouts" aria-expanded="false"
            aria-controls="sidebar-layouts">
            <i class="fas fa-columns menu-icon"></i>

            <span class="menu-title">Sidebar Layouts</span>
            <i class="menu-arrow"></i>
          </a>
          <div class="collapse" id="sidebar-layouts">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item"> <a class="nav-link" href="pages/layout/compact-menu.html">Compact menu</a></li>
              <li class="nav-item"> <a class="nav-link" href="pages/layout/sidebar-collapsed.html">Icon menu</a></li>
              <li class="nav-item"> <a class="nav-link" href="pages/layout/sidebar-hidden.html">Sidebar Hidden</a></li>
              <li class="nav-item"> <a class="nav-link" href="pages/layout/sidebar-hidden-overlay.html">Sidebar
                  Overlay</a></li>
              <li class="nav-item"> <a class="nav-link" href="pages/layout/sidebar-fixed.html">Sidebar Fixed</a></li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
            <i class="far fa-compass menu-icon"></i>
            <span class="menu-title">Basic UI Elements</span>
            <i class="menu-arrow"></i>
          </a>
          <div class="collapse" id="ui-basic">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item"> <a class="nav-link" href="pages/ui-features/accordions.html">Accordions</a></li>
              <li class="nav-item"> <a class="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
              <li class="nav-item"> <a class="nav-link" href="pages/ui-features/badges.html">Badges</a></li>
              <li class="nav-item"> <a class="nav-link" href="pages/ui-features/breadcrumbs.html">Breadcrumbs</a></li>
              <li class="nav-item"> <a class="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a></li>
              <li class="nav-item"> <a class="nav-link" href="pages/ui-features/modals.html">Modals</a></li>
              <li class="nav-item"> <a class="nav-link" href="pages/ui-features/progress.html">Progress bar</a></li>
              <li class="nav-item"> <a class="nav-link" href="pages/ui-features/pagination.html">Pagination</a></li>
              <li class="nav-item"> <a class="nav-link" href="pages/ui-features/tabs.html">Tabs</a></li>
              <li class="nav-item"> <a class="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
              <li class="nav-item"> <a class="nav-link" href="pages/ui-features/tooltips.html">Tooltips</a></li>
            </ul>
          </div>
        </li> -->
      
        
        <li class="nav-item">   
          <router-link to="/TextEditor" class="nav-link" href="pages/ui-features/popups.html">
            <i class="fas fa-pen-square menu-icon"></i>
            <span class="menu-title">Text Editor</span>
          </router-link>
        </li>
        <li class="nav-item">   
          <router-link to="/CodeEditor" class="nav-link" href="pages/ui-features/popups.html">
            <i class="fas fa-file-code menu-icon"></i>
            <span class="menu-title">Code Editor</span>
          </router-link>
        </li>

        <li class="nav-item">   
          <router-link to="/Error" class="nav-link" href="pages/ui-features/popups.html">
            <i class="fas fa-pen-square menu-icon"></i>
            <span class="menu-title">404</span>
          </router-link>
        </li>
    
        <!-- <li class="nav-item">
          <a class="nav-link" href="pages/documentation.html">
            <i class="far fa-file-alt menu-icon"></i>
            <span class="menu-title">Documentation</span>
          </a>
        </li> -->
      </ul>
    </nav>
  </div>
</template>