<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/cart">
      <span class="tab-link">ShopCart</span>
    </router-link>
    <router-link tab="div" class="tab-item" to="/other">
      <span class="tab-link">Other</span>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
  .tab {
    display: flex;
    height: 44px;
    line-height: 44px;
    font-size: 15px;
  }
  .tab-item {
    flex: 1;
    text-align: center;
  }
  .tab-link {
    padding-bottom: 5px;
  }
</style>
