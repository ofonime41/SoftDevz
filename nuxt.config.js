export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'softdevz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      { rel:'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css'},   
    ],

    script:[
      {src:'vendors/js/vendor.bundle.base.js'},
      {src:'vendors/js/vendor.bundle.addons.js'},
      // CODEditor
       {src:'vendors/ace-builds/src-min/ace.js'},
      {src:'js/codeEditor.js'},

      // 

      // TEXT EDITOR
      {src:'vendors/tinymce/tinymce.min.js'},
      {src:'vendors/tinymce/themes/modern/theme.js'},
      {src:'vendors/summernote/dist/summernote-bs4.min.js'},
      {src:'js/editorDemo.js'},
      // 

      {src:'js/off-canvas.js'},
      {src:'js/hoverable-collapse.js'},
      {src:'js/misc.js'},
      {src:'js/settings.js'},
      {src:'js/todolist.js'},
      {src:'js/dashboard.js'},
      // {src:'https://use.fontawesome.com/3f430fba04.js'},

    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
       '~/assets/css/style.css',  
       '~/static/vendors/css/vendor.bundle.base.css',
       '~/static/vendors/css/vendor.bundle.addons.css',

      //  TEXT EDITOR
      '~/static/vendors/summernote/dist/summernote-bs4.css',
      
        // '~/assets/fontawesome/css/all.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
  ],
  fontawesome: {
    icons:{
     solid:true,
     brands:true
    }
   },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
  },

 
}
