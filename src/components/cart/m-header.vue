<template>
  <div class="m-header">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style>
  .m-header {
    width: 100%;
    height: 44px;
    line-height: 44px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #ccc;
  }
</style>
