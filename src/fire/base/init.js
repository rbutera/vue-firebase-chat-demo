import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCYQAY8Ah5WvVUlUl0ftPAcUB3Y2XWMKgw',
  authDomain: 'vue-firebase-chat-demo.firebaseapp.com',
  databaseURL: 'https://vue-firebase-chat-demo.firebaseio.com',
  projectId: 'vue-firebase-chat-demo',
  storageBucket: 'vue-firebase-chat-demo.appspot.com',
  messagingSenderId: '494112823036'
}
export const firebaseApp = firebase.initializeApp(config)

firebaseApp.firestore().settings({ timestampsInSnapshots: true })

const db = firebaseApp.firestore()

export default db
