<template>
  <div class="chat-display">
    <ac-message 
      v-for="(message, index) in messages" 
      :message="message.message" 
      :received="message.received"
      :key="index"/>
  </div>
</template>

<script>
import Message from './Message.vue'
export default {
  props: ['messages'],
  components: {
    'ac-message': Message
  },
  mounted () {
    console.log(this.messages)
  }
}
</script>

<style scoped>
.chat-display {
  width: 100%;
  background: red;
  height: 100px;
}
</style>
