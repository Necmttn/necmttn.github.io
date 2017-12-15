import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import Card from '../views/Card'


const stories = storiesOf('Card', module)

stories.addDecorator(withKnobs)

stories.add('with only Text',
  withInfo(`
    card Component when there's only text
  `
  )(context => (
      <Card onClick={action('click')}>
        <Card.Header>
          Awesome Card
        </Card.Header>
        <Card.Content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
        </Card.Content>
      </Card>
  )))
stories.add('with some emoji', () => (
  <Card onClick={action('clicked')}>😀 😎 👍 💯</Card>
));
