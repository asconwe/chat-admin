import Vue from 'vue'

import { storiesOf } from '@storybook/vue'

import AppStyle from 'AppStyle.vue'
import MessageInput from 'components/chat-presentation/message-input/MessageInput.vue'

storiesOf('MessageInput', module)
  .add('story as a component', () => ({
    components: { MessageInput, AppStyle },
    template: `
        <app-style>
            <message-input />
        </app-style>        
    `
  }))