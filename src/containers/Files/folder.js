import React, { useState } from 'react';
import FileImage from './fileImage';
import './files.scss';

import closedFolder from './../../assets/image/folder/folder.png';
import openedFolder from './../../assets/image/folder/open_folder.png';

// TODO: 
// 1. write logic to check if the file is open
// 2. figure out what props are here, name, size?, open etc

const renderChildren = (children) => {

}

export default function Folder(props) {
    const [state, setState] = useState('closed');

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
                <button><FileImage src={openedFolder} event={triggerClosedFolderState} /></button>
            )}
        </div>
    )
}