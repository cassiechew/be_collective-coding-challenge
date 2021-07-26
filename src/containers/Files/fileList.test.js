import { create } from 'react-test-renderer';
import React from 'react';
import FileList from './fileList';

describe('snapshot test', () => {
    test('testing footer', () => {
      let tree = create(<FileList setParentNumFiles={null} setParentFileSize={null} />);
      expect(tree.toJSON()).toMatchSnapshot();
    });
});
