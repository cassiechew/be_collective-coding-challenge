import { render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';
import React from 'react';
import File from './file';

describe('File component', () => {
    test('contains name text', () => {
        render(<File name="test" />);
        const text = screen.getByText(/test/i);
        expect(text).toBeInTheDocument();
    });

    test('contains size text', () => {
        render(<File size="size" />);
        const text = screen.getByText(/size/i);
        expect(text).toBeInTheDocument();
    });
});

describe('snapshot test', () => {
    test('testing footer', () => {
      let tree = create(<File name="name" size="size" />);
      expect(tree.toJSON()).toMatchSnapshot();
    });
});