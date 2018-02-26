import Vue from 'vue';

import { storiesOf } from '@storybook/vue'

import SendButton from 'components/chat-presentation/message-input/SendButton.vue'

storiesOf('SendButton', module)
  .add('story as a component', () => ({
      components: { SendButton },
      template: '<send-button />',
    })
  )