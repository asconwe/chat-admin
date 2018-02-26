<template>
    <div>
        <div 
          contenteditable="true"
          class="input-box textarea" 
          name="message-input" 
          id="message-input" 
          @input="updateClone"
          @focusout="updateParent"
          placeholder="..." 
          :style="`height: ${textareaHeight}px`"
          ref="message"
        />
        <div class="artificially-hidden">
          <ac-import-box-clone class="input-box height-control" :applyCloneHeight="applyCloneHeight" :message="messageForClone"></ac-import-box-clone>
        </div>
    </div>
</template>

<script>
import InputBoxClone from './InputBoxClone.vue'

export default {
  props: ['handleInput', 'primeClear', 'primeSetRef'],
  components: {
    'ac-import-box-clone': InputBoxClone
  },
  data () {
    return {
      messageForClone: '',
      textareaHeight: 40
    }
  },
  mounted () {
    console.log(this.clearRef)
    this.primeSetRef(this.setRefInner)
  },
  methods: {
    applyCloneHeight (height) {
      this.textareaHeight = height
    },
    updateClone (event) {
      this.messageForClone = event.target.innerText
    },
    updateParent (event) {
      const message = event.target.innerText
      this.handleInput(message)
    },
    setRefInner (message) {
      this.$refs.message.innerHTML = message || ''
      this.messageForClone = message || ''
    }
  }
}
</script>

<style scoped>
.input-box {
  width: 100%;
  padding: 8px;
  min-height: 40px;
  white-space: pre-wrap;
  vertical-align: text-bottom;
}

.input-box.textarea {
  resize: none;
  border: none;
  overflow: visible;
}

.input-box.height-control {
  word-wrap: break-word;
}

.artificially-hidden {
  height: 0;
  opacity: 0;
  width: 100%;
  overflow: hidden;
}
</style>
