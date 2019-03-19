<template>
  <div class="welcome">
    <h1>Welcome</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      msg: 'Welcome to vue-firebase-chat-demo',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
