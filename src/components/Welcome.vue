<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <p class="introduction">To join the chat, pick a username and click 'Enter Chat'</p>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name:</label>
          <input type="text" name="name" v-model="name" @keyup="validateUsername(name)">
          <p v-if="feedback" class="red-text">{{feedback}}</p>
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      name: null,
      valid: false,
      feedback: null,
    }
  },
  methods: {
    validateUsername(name) {
      if (name && name.length > 32) {
        this.feedback =
          'Too long. Please enter a username with less than 32 characters.'
        return false
      }
      this.feedback = null
      return true
    },
    enterChat() {
      const name = this.name || 'Anonymous'
      this.valid = this.validateUsername(name)
      if (this.valid) {
        console.debug(`entering chat\t(name = ${name})`)
        this.$router.push({ name: 'Chat', params: { name } })
      } else {
        console.error(`not entering chat\t(name = ${name})`)
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.welcome {
  max-width: 400px;
  margin-top: 100px;
}

.welcome h2 {
  font-size: 2.5em;
}

.welcome .card .card-content p.introduction {
  margin: 40px auto;
}

.welcome .btn {
  margin: 20px auto;
}
</style>

