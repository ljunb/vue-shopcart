<template>
  <div>
    <div v-for="item in list" :key="item.id" class="cart-item">
      {{ item.name }}：￥{{ item.price }} x {{ item.count }}
      <button @click="removeFruit(item)" :disabled="deBtnDisabled(item.id)"> - </button>
      <button @click="addFruit(item)" :disabled="inBtnDisabled(item.id)"> + </button>
      <button @click="delFruit(item)" :disabled="deBtnDisabled(item.id)">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

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
