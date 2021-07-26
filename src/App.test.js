import { render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';
import App from './App';
import React from 'react';

test('renders file viewer text', () => {
  render(<App />);
  const linkElement = screen.getByText(/File Viewer/i);
  expect(linkElement).toBeInTheDocument();
});

describe('snapshot test', () => {
  test('testing app', () => {
    let tree = create(<App />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});