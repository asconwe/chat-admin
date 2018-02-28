<template>
<div class="message-outer">
  <div :class="`message ${this.received ? 'received' : 'sent'}`">
    {{message}}
  </div>
</div>
</template>

<script>
export default {
  props: ['received', 'message']
}
</script>

<style scoped>
.message-outer {
  width: 100%;
  float: left;
}
.message {
  max-width: 75%;
  min-height: 32px;
  border-radius: 16px;
  padding: 8px;
  line-height: 16px;
}
.message.received {
  float: left;
  background: yellow;
}
.message.sent {
  float: right;
  background: lightblue;
}
</style>
