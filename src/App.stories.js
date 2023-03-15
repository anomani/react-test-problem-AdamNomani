// Stories for testing `App` go here
// See https://storybook.js.org/docs/react/writing-stories/introduction#how-to-write-stories
import React from 'react';
import { render, screen } from '@testing-library/react';
import { storiesOf } from '@storybook/react';
import App from './App';

storiesOf('App', module)
  .add('default', () => <App />);
