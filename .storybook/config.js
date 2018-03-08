import { configure } from '@storybook/vue';

import Vue from 'vue'
import Vuex from 'vuex' // Vue plugins
import contenteditable from 'vue-contenteditable-directive'

// Install Vue plugins.
Vue.use(Vuex);
Vue.use(contenteditable)

function loadStories () {
  // You can require as many stories as you need.
  require('stories/components/authentication/Login')
  require('../src/stories/components/ChatContainer');
  require('stories/components/chat-presentation/message-input/SendButton')
  require('stories/components/chat-presentation/message-input/InputBox')
  require('stories/components/chat-presentation/message-input/MessageInput')
  require('stories/components/chat-presentation/chat-display/Message')
  require('stories/components/chat-presentation/chat-display/ChatDisplay')
  require('stories/components/chat-presentation/Chat')
}

configure(loadStories, module)