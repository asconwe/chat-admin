import { storiesOf } from '@storybook/vue'

import AppStyle from 'AppStyle.vue'
import Message from 'components/chat-presentation/chat-display/Message.vue'

storiesOf('Message', module)
  .add('Received', () => ({
    components: { Message, AppStyle },
    template: `
        <app-style>
            <Message message="hello" :received="true"/>
        </app-style>        
    `
  }))
  .add('Sent', () => ({
    components: { Message, AppStyle },
    template: `
        <app-style>
            <Message message="This is a sent message" :received="false"/>
        </app-style>        
    `
  }))