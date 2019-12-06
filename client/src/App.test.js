import React from 'react';
import { render, getByTestId} from '@testing-library/react';
import App from './App';

test('app renders without crashing', () => {
  render(<App />);
})

test('renders title', () => {
  const {getByText} = render(<App />);
  
  getByText(/Women's World Cup/i);
})

test('toggle button', () => {
  const {getByTestId} = render(<App />);

  getByTestId(/toggle-button/i);
})

test('names come back', () => {
  const {queryAllByText} = render(<App />);

  queryAllByText(/name/i);
})

test('player info', () => {
  const {getByTestId} = render(<App />);

  getByTestId(/player/i);
})

// test('placeholder successful', () => {
//   const {queryAllByText} = render(<App />);
//   const allPlayers = queryAllByText();

//   expect (allPlayers).toHaveLength(2);
// })