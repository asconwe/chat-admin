import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import AppStyle from 'AppStyle.vue';
import InputBox from 'components/chat-presentation/message-input/InputBox.vue';

storiesOf('InputBox', module)
  .add('story as a component', () => ({
    components: { InputBox, AppStyle },
    template: `
        <app-style>
            <input-box />
        </app-style>        
    `,
  }));