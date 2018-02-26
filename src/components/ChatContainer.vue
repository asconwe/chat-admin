<template>
  <div>
    <ac-message-input 
      :set-message="setMessage" 
      :message="message" 
      :send-message="sendMessage" 
      :prime-clear="primeClear"/>
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
      primedRef: undefined,
      socket: io('http://localhost:3000/')
    }
  },
  methods: {
    setMessage (message) {
      this.message = message
    },
    sendMessage () {
      console.log(this.message)
      this.primedRef.value = ''
      this.socket.emit('chat message', this.message)
      this.message = ''
    },
    primeClear (ref) {
      this.primedRef = ref
    }
  }
}
</script>
