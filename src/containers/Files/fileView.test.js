import { create } from 'react-test-renderer';
import React from 'react';
import FileView from './fileView';

describe('snapshot test', () => {
    test('testing footer', () => {
      let tree = create(<FileView setParentNumFiles={null} setParentFileSize={null} />);
      expect(tree.toJSON()).toMatchSnapshot();
    });
});
