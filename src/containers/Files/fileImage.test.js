import { create } from 'react-test-renderer';
import React from 'react';
import FileImage from './fileImage';

describe('snapshot test', () => {
    test('testing footer', () => {
      let tree = create(<FileImage src="source/url" />);
      expect(tree.toJSON()).toMatchSnapshot();
    });
});