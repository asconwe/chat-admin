import Vue from 'vue'

import { storiesOf } from '@storybook/vue'

import AppStyle from 'AppStyle.vue'
import ChatContainer from 'components/ChatContainer.vue'

storiesOf('ChatContainer', module)
  .add('story as a component', () => ({
    components: { ChatContainer, AppStyle },
    template: `
      <app-style>
        <chat-container socketUrl="http://localhost:3000" name="August Conwell"/>
      </app-style>
    `
  }))