import { storiesOf } from '@storybook/vue'

import AppStyle from 'AppStyle.vue'
import Login from 'components/authentication/Login.vue'

storiesOf('Login', module)
  .add('empty, unstyled page', () => ({
    components: { AppStyle, Login },
    template: `
      <AppStyle>
        <Login />
      </AppStyle>
    `
  }))