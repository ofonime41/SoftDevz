<template>
  <div>
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
            <span class="menu-title">Landing page</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to=""></router-link>
          <router-link to="/" class="nav-link">
            <i class="fa fa-home menu-icon"></i>
            <span class="menu-title">Dashboard</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/signup" class="nav-link" href="pages/widgets.html">
            <i class="fa fa-unlock menu-icon"></i>
            <span class="menu-title">Signup</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/signin" class="nav-link" href="pages/widgets.html">
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
          <router-link to="/timeline" class="nav-link" href="pages/widgets.html">
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
          <router-link to="/textEditor" class="nav-link">
            <i class="fas fa-pen-square menu-icon"></i>
            <span class="menu-title">Text Editor</span>
          </router-link>
        </li>
        <li class="nav-item">   
          <router-link to="/codeEditor" class="nav-link">
            <i class="fas fa-file-code menu-icon"></i>
            <span class="menu-title">Code Editor</span>
          </router-link>
        </li>

        <li class="nav-item">   
          <router-link to="/error" class="nav-link">
            <i class="fas fa-pen-square menu-icon"></i>
            <span class="menu-title">404</span>
          </router-link>
        </li>

        <li class="nav-item">   
          <router-link to="/dropbox" class="nav-link">
            <i class="fas fa-pen-square menu-icon"></i>
            <span class="menu-title">Drop box</span>
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