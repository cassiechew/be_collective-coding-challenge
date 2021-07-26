import React from 'react';
import Footer from './footer';
import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

describe('Footer component', () => {
    test('contains size text', () => {
        render(<Footer />);
        const totalText = screen.getByText(/Total Files:/i);
        expect(totalText).toBeInTheDocument();
    });

    test('contains file text', () => {
        render(<Footer />);
        const totalFileText = screen.getByText(/Total File Size:/i);
        expect(totalFileText).toBeInTheDocument();
    });
});

describe('snapshot test', () => {
    test('testing footer', () => {
      let tree = create(<Footer />);
      expect(tree.toJSON()).toMatchSnapshot();
    });
});