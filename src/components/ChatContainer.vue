<template>
  <div>
    <ac-message-input 
      :setMessage="setMessage" 
      :message="message" 
      :sendMessage="sendMessage" 
      :primeClear="primeClear"
      :primeSetRef="primeSetRef"/>
  </div>
</template>

<script>
import io from 'socket.io-client'
import MessageInput from 'components/chat-presentation/message-input/MessageInput.vue'

export default {
  components: {
    'ac-message-input': MessageInput
  },
  data () {
    return {
      message: '',
      clearRef: undefined,
      setRefInner: undefined,
      socket: io('http://localhost:3000/')
    }
  },
  methods: {
    setMessage (message) {
      this.message = message
      this.setRefInner(message)
    },
    sendMessage () {
      this.socket.emit('chat message', this.message)
      this.message = ''
      // this.clearRef()
      this.setRefInner('')
    },
    primeClear (refClearFunc) {
      this.clearRef = refClearFunc
    },
    primeSetRef (refSetFunc) {
      this.setRefInner = refSetFunc
    }
  }
}
</script>
