<template>
  <div class="chat container">
    <h2 class="center teal-text">Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li>
            <span class="name teal-text">Name</span>
            <span class="grey-text text-darken-3">message</span>
            <span class="grey-text time">time</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <input type="text" name="write-message">
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Chat',
  props: ['name'],
  data() {
    return {}
  },
}
</script>


<style lang="scss">
.chat {
  h2 {
    font-size: 2.6em;
    margin-bottom: 40px;
  }
}
</style>
