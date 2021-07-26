import { create } from 'react-test-renderer';
import React from 'react';
import Folder from './folder';

describe('snapshot test', () => {
    test('testing footer', () => {
      let tree = create(<Folder name="name" size="size" children={[]}/>);
      expect(tree.toJSON()).toMatchSnapshot();
    });
});
