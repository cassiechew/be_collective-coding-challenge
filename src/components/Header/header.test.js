import { render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';
import React from 'react';
import Header from './header';

describe('Header component', () => {
    test('contains header text', () => {
        render(<Header title="test" />);
        const text = screen.getByText(/test/i);
        expect(text).toBeInTheDocument();
    });
});

describe('snapshot test', () => {
    test('testing footer', () => {
      let tree = create(<Header title="test" />);
      expect(tree.toJSON()).toMatchSnapshot();
    });
});