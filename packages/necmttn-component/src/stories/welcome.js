import React from 'react';
import { Welcome } from '@storybook/react/demo';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <div>
      <h1> Welcome to my Personal Component Library </h1>
      <p>
        These are the components which i think theres a some value to keep it.
        and share with open source community
      </p>
    </div>
  ));
