<template>
  <div class="chat container">
    <h2>Chat</h2>
    <p>{{this.name}}</p>
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


<style>
.chat {
}
</style>
