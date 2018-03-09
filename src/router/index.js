import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/login/login';
import Home from '@/components/home/home';
import ShopCart from '@/components/cart/ShopCart';
import Other from '@/components/other/other';
import OtherLeft from '@/components/other/other-left';
import OtherRight from '@/components/other/other-right';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          name: 'ShopCart',
          component: ShopCart,
        },
        {
          path: '/cart',
          name: 'ShopCart',
          component: ShopCart,
        },
        {
          path: '/other',
          name: 'Other',
          component: Other,
          children: [
            {
              path: '',
              component: OtherLeft,
            },
            {
              path: 'left',
              component: OtherLeft,
            },
            {
              path: 'right',
              component: OtherRight,
            },
          ],
        },
      ],
    },
  ],
});
