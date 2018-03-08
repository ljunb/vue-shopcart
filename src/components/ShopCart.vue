<template>
  <div class="shop-cart">
    <m-header></m-header>
    <m-cart-list></m-cart-list>
    <m-footer></m-footer>
  </div>
</template>

<script>
import Header from './m-header';
import Footer from './m-footer';
import CartList from './m-cart-list';

export default {
  created() {
    this.$store.dispatch('fetchListData');
  },
  components: {
    'm-header': Header,
    'm-footer': Footer,
    'm-cart-list': CartList,
  },
};
</script>
