<template>
         <div class="container-scroller">
        <!-- Navbar -->
     <Navbar/>
    <!-- partial -->
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
                Text editors
            </h3>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Editors</a></li>
                <li class="breadcrumb-item active" aria-current="page">Text editors</li>
                </ol>
            </nav>
          </div>
          <div class="row grid-margin">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Text Editor</h4>
                  <div id="summernoteExample">
                    <h4>The standard Lorem Ipsum passage, used since the 1500s</h4>
                    <img src="/images/carousel/banner_1.jpg" class="ml-2 mb-2 w-25" alt="img">
                    <p class="text-justify">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                    <p class="text-justify">
                      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                      veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                      magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
          
        </div>
        <!-- content-wrapper ends -->
        <footer/>
      </div>
      <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
</template>

<style>

</style>

<script>
export default {
  mounted(){
    let texteditor = document.createElement('script');
    texteditor .setAttribute("src", "/js/editorDemo.js");
    texteditor .setAttribute("defer", "true");
    document.body.appendChild(texteditor);

  //   let tinymce = document.createElement('script');
  //   tinymce.setAttribute("src", "/vendors/tinymce/tinymce.min.js");
  //   tinymce.setAttribute("defer", "true");
  //   document.body.appendChild(tinymce);

  //   let tinymceTheme = document.createElement('script');
  //  tinymceTheme.setAttribute("src", "/vendors/tinymce/themes/modern/theme.js");
  //  tinymceTheme.setAttribute("defer", "true");
  //   document.body.appendChild(tinymceTheme);

    let summernote = document.createElement('script');
  summernote.setAttribute("src", "/vendors/summernote/dist/summernote-bs4.min.js");
  summernote.setAttribute("defer", "true");
    document.body.appendChild(summernote);
  },
 
}

</script>