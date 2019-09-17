import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import 'bootstrap';
import 'animate.css/animate.css';
import 'bootstrap/dist/css/bootstrap.css';
// import './scormdriver';

export const centralData = new Vue({
  data: {
    SD: window.parent,
    loc: window.location.href
  }
});
Vue.use(VueRouter);
import Folie0 from './components/Folie0.vue';
import Folie1 from './components/Folie1.vue';
import Folie2 from './components/Folie2';
import Folie3 from './components/Folie3';
import Folie4 from './components/Folie4';



const router = new VueRouter({
  routes: [{
      path: '*',
      component: Folie0
    },
    {
      path: '/1',
      component: Folie1
    },
    {
      path: '/2',
      component: Folie2
    },
    {
      path: '/3',
      component: Folie3
    },
    {
      path: '/4',
      component: Folie4
    }
  ]
});
new Vue({
  render: (h) => h(App),
  router
}).$mount('#app');