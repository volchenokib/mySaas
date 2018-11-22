import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue);


// change background color of pages
router.afterEach((to, from) => {
  if (to.name === "Login") {
    document.querySelector("body").classList.add("grey");
  } else {
    document.querySelector("body").classList.remove("grey");
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
