import React, { useState } from 'react';
import FileImage from './fileImage';
import './files.scss';

import closedFolder from './../../assets/image/folder/folder.png';
import openedFolder from './../../assets/image/folder/open_folder.png';

/**
 * A function to map the children of the folder into a block of components
 * 
 * @param {JSX.component[]} children 
 * @returns A block of components
 */
const renderChildren = (children) => {
    return children.map(e => {
        return e;
    });
};

/**
 * Component that represents a folder. It contains its children as well. It will
 * change its icon on a click
 * 
 * @Component
 */
export default function Folder(props) {
    const [state, setState] = useState('closed');
    const children = renderChildren(props.children);

    const triggerOpenFolderState = () => {
        setState('open');
    };

    const triggerClosedFolderState = () => {
        setState('closed');
    };

    return (
        <div className="container__folder">
            {state === 'closed' && (
                <button><FileImage src={closedFolder} event={triggerOpenFolderState} /></button>
            )}

            {state === 'open' && (
                <div>
                    <button><FileImage src={openedFolder} event={triggerClosedFolderState} /></button>
                    {children}
                </div>
            )}
        </div>
    )
}