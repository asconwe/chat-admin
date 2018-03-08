<template>
  <form @submit="handleSubmit">
    <label for="email">Email</label>
    <input type="text" id="email" v-model="email">
    <label for="password">Password</label>
    <input type="password" id="password" v-model="password">
    <input type="submit" value="Login"/>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      axios.post('https://localhost:3000/auth/login', { email: this.email, password: this.password })
        .then(({response}) => console.log(response))
        .catch(({response}) => console.log(response))
    }
  }
}
</script>

<style>

</style>
