<template>
  <div class="home">
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import tab from '@/components/tab';

export default {
  components: {
    tab,
  },
};
</script>
