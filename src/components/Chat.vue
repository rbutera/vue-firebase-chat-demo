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
        <NewMessage :username="name"/>
      </div>
    </div>
  </div>
</template>


<script>
import NewMessage from '@/components/NewMessage'
export default {
  name: 'Chat',
  props: ['name'],
  components: { NewMessage },
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
  span {
    font-size: 1.4em;
  }
  .time {
    display: block;
    font-size: 1.2em;
  }
}
</style>
