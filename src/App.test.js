import { render, screen, fireEvent } from '@testing-library/react';

// import your story from App.stories.js

import '../path/to/App.stories.js';

// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library

test('renders button with initial text "click me"', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent('click me');
  });

  test('clicking the button changes its text to "thanks"', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('thanks');
  });