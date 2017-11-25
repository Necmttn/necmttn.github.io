import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import Button from '../elements/Button'


const stories = storiesOf('Button', module)

stories.addDecorator(withKnobs)


stories.add('with text',
  withInfo(`
    Use the [info addon](https://github.com/storybooks/storybook/tree/master/addons/info) with its new painless API.'
  `
  )(context => (
      <Button onClick={action('click')}>Hello</Button>
  )))
stories.add('with some emoji', () => (
  <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
));
