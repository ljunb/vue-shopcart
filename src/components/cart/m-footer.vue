<template>
  <div class="m-footer">
    总价：￥{{ total }}
    <button @click="addAll">全选</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: mapGetters({
    total: 'totalPrice',
  }),
  methods: mapActions([
    'addAll',
  ]),
};
</script>

<style>
  .m-footer {
    height: 50px;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: #ccc;
    width: 100%;
    line-height: 50px;
  }
</style>
