import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import Icon from '../elements/Icon'


const stories = storiesOf('Icon', module)

stories.addDecorator(withKnobs)


stories.add('with text',
  withInfo(`
    Use the [info addon](https://github.com/storybooks/storybook/tree/master/addons/info) with its new painless API.'
  `
  )(context => (
      <Icon name="search" stroke="red" width="32" height="32" />
  )))
