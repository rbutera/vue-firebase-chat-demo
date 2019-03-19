<template>
  <div class="new-message">
    <form autocomplete="off" @submit.prevent="postMessage" @keydown="validateMessage">
      <p v-if="feedback" class="red-text">{{feedback}}</p>
      <input type="text" name="write-message" v-model="message">
      <span v-if="message" class="chars-left grey-text">{{message.length}}/140</span>
    </form>
  </div>
</template>


<script>
import db from '@/firebase/init'
export default {
  name: 'NewMessage',
  props: ['username'],
  data() {
    return {
      message: null,
      feedback: null,
      valid: false,
    }
  },
  methods: {
    postMessage() {
      this.valid = this.validateMessage()
      if (!this.message) {
        this.feedback = 'Please enter your message.'
      }
      if (this.valid) {
        console.log(
          `would post message:\nusername:\t'${this.username}'\nbody:\n\t${
            this.message
          }`,
        )

        db.collection('messages')
          .add({
            name: this.username,
            content: this.message,
            timestamp: Date.now(),
          })
          .catch(err => console.error(err))

        this.message = null
      } else {
        console.log(`not posting message`)
      }
    },
    validateMessage(event) {
      if (!this.message && event && event.key !== 'Enter') {
        this.feedback = null
        return false
      }
      if (this.message && this.message.length <= 140) {
        this.feedback = null
        return true
      }

      if (this.message && this.message.length > 140) {
        this.feedback = 'Too long. Please enter 140 characters or less.'
        return false
      }
    },
  },
}
</script>

<style lang="scss">
.new-message {
  .chars-left {
    font-size: 0.8em;
  }
}
</style>