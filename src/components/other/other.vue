<template>
  <div>
    <div class="other-tab">
      <router-link tag="div" class="other-tab-link" to="/other/left">
        <span>Left</span>
      </router-link>
      <router-link tag="div" class="other-tab-link" to="/other/right">
        <span>Right</span>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
  .other-tab {
    display: flex;
    line-height: 40px;
  }

  .other-tab-link {
    flex: 1;
    text-align: center;
  }
</style>
