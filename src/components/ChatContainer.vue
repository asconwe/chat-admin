<template>
  <div>
    <ac-message-input>
      <ac-input-box slot="input-box">
        <div v-contenteditable="message" class="input-box"/>
      </ac-input-box>
      <ac-send-button slot="send-button" class="send-button-position" :handleSubmit="sendMessage"/>
    </ac-message-input>    
  </div>
</template>

<script>
import io from 'socket.io-client'
import MessageInput from 'components/chat-presentation/message-input/MessageInput.vue'
import SendButton from 'components/chat-presentation/message-input/SendButton.vue'
import InputBox from 'components/chat-presentation/message-input/InputBox.vue'

export default {
  props: ['socketUrl'],
  components: {
    'ac-message-input': MessageInput,
    'ac-send-button': SendButton,
    'ac-input-box': InputBox
  },
  data () {
    return {
      message: '',
      socket: io(this.socketUrl)
    }
  },
  methods: {
    sendMessage () {
      console.log(this.message)
      this.socket.emit('chat message', this.message)
      this.message = ''
    }
  }
}
</script>