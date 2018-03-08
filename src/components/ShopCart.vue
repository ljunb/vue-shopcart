<template>
  <div class="shop-cart">
    <m-header></m-header>
    <div v-for="item in list" :key="item.id" class="cart-item">
        {{ item.name }}：￥{{ item.price }} x {{ item.count }}
      <button @click="removeFruit(item)" :disabled="deBtnDisabled(item.id)"> - </button>
      <button @click="addFruit(item)" :disabled="inBtnDisabled(item.id)"> + </button>
      <button @click="delFruit(item)" :disabled="deBtnDisabled(item.id)">Delete</button>
    </div>
    <m-footer></m-footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Header from './m-header';
import Footer from './m-footer';

export default {
  computed: mapGetters({
    list: 'list',
    inBtnDisabled: 'incrementBtnDisabled',
    deBtnDisabled: 'decrementBtnDisabled',
  }),
  methods: mapActions([
    'addFruit',
    'removeFruit',
    'delFruit',
  ]),
  created() {
    this.$store.dispatch('fetchListData');
  },
  components: {
    'm-header': Header,
    'm-footer': Footer,
  },
};
</script>

<style scoped>
  .cart-item {
    height: 44px;
    justify-content: space-around;
    line-height: 44px;
    width: 100%;
  }
</style>
