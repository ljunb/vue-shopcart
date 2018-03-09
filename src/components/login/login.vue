/* eslint-disable */
<template>
  <div class="login">
    <div class="content">
      <div class="input-cell">
        <span class="text">Account:</span>
        <cube-input
          type="number"
          v-model="account"
          clearable="true"
        ></cube-input>
      </div>
      <div class="input-cell">
        <span class="text">Password:</span>
        <cube-input
          type="password"
          v-model="password"
          eye="true"
        ></cube-input>
      </div>
      <cube-button type="submit" class="button" :disabled="!canLogin" @click="handleLogin">Login</cube-button>
    </div>
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
    handleLogin() {
      this.$router.push('/home');
    },
  },
};
</script>

<style>
  .login {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .input-cell {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
  }
  .text {
    color: black;
    font-size: 16px;
    width: 100px;
  }
  .button {
    width: 80%;
    margin-left: 10%;
  }
</style>
