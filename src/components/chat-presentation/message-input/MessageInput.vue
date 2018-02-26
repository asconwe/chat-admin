<template>
  <div class="message-input">
    <ac-input-box class="input-box-position" :primeClear="primeClear" :handle-input="setMessage"/>
    <ac-send-button class="send-button-position" :handle-submit="sendMessage"/>
  </div>
</template>

<script>
import InputBoxVue from './InputBox.vue'
import SendButtonVue from './SendButton.vue'

export default {
  props: ['setMessage', 'sendMessage', 'primeClear'],
  components: {
    'ac-input-box': InputBoxVue,
    'ac-send-button': SendButtonVue
  }
}
</script>

<style scoped>
  .message-input {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: visible;
    border: solid 1px black;
    padding-right: 100px;
  }

  .input-box-position {
    float: left;
    margin-left: 0;
    width: 100%;
  }

  .send-button-position {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100px;
    height: auto;
  }
</style>
