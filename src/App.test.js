import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';

describe('App', () => {
  test('test of the tests runner', () => {
    expect(true).toBeTruthy();
  });
});

test('renders learn Numpad link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Numpad/i);
  expect(linkElement).toBeInTheDocument();
});
