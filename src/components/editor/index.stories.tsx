import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Editor } from '.'

storiesOf('editor', module).add('default', () => {
  return <Editor />
})
