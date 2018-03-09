/* eslint-disabled */
<template>
  <div class="login">
    <div>
      Account：
      <input v-model="account" placeholder="Account"/>
    </div>
    <div>
      Password：
      <input v-model="password" placeholder="Password"/>
    </div>
    <button :disabled="!canLogin" @click="onPress">Login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: '',
      password: '',
    };
  },
  computed: {
    canLogin() {
      return this.account && this.password;
    },
  },
  methods: {
    onPress() {
      this.$router.push('/home');
    },
  },
};
</script>

<style>
  .login {
    flex: 1;
  }
</style>
