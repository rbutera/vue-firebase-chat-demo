<template>
  <div class="chat container">
    <h2 class="center teal-text">Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li v-for="message in messages" :key="message.id">
            <span class="name teal-text">{{message.name}}</span>
            <span class="grey-text text-darken-3">{{message.content}}</span>
            <span class="grey-text time">{{message.timestamp}}</span>
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
import moment from 'moment'
import { forEach } from 'rambda'
import db from '@/firebase/init'
import NewMessage from '@/components/NewMessage'
export default {
  name: 'Chat',
  props: ['name'],
  components: { NewMessage },
  data() {
    return {
      messages: [],
    }
  },
  created() {
    let ref = db.collection('messages').orderBy('timestamp')

    ref.onSnapshot(snapshot => {
      const changes = snapshot.docChanges()

      forEach(change => {
        if (change.type === 'added') {
          const doc = change.doc
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format('lll'),
          })
        }
      })(changes)
    })
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
    font-size: 0.82em;
  }
}
</style>
