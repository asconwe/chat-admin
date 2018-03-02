<template>
  <div ref="container" class="container">
    <ac-chat-display ref="display" :messages="messages"/>
    <ac-message-input ref="input" >
      <ac-input-box slot="input-box">
        <slot />
      </ac-input-box>
      <ac-send-button slot="send-button" class="send-button-position" :handleSubmit="sendMessage"/>
    </ac-message-input>
  </div>
</template>

<script>
import ChatDisplay from './chat-display/ChatDisplay.vue'
import MessageInput from './message-input/MessageInput.vue'
import InputBox from './message-input/InputBox.vue'
import SendButton from './message-input/SendButton.vue'

export default {
  props: ['sendMessage', 'messages', 'message'],
  components: {
    'ac-chat-display': ChatDisplay,
    'ac-message-input': MessageInput,
    'ac-input-box': InputBox,
    'ac-send-button': SendButton
  },
  updated () {
    console.log('before update')
    const { container, display, input } = this.$refs
    console.log(display.$el)
    const displayHeight = container.clientHeight - input.$el.clientHeight
    console.log(displayHeight)
    display.$el.setAttribute('style', `height: ${displayHeight}px`)
    display.$el.scrollTop = display.$el.clientHeight
  },
  mounted () {
    console.log('mounted')
    const { container, display, input } = this.$refs
    console.log(container)
    const displayHeight = container.clientHeight - input.$el.clientHeight
    display.$el.setAttribute('style', `height: ${displayHeight}px`)
    display.$el.scrollTop = display.$el.clientHeight
  }
}
</script>

<style>
.container {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
