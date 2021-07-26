import React, { useState } from 'react';
import FileImage from './fileImage';
import './files.scss';

import closedFolder from './../../assets/image/folder/folder.png';
import openedFolder from './../../assets/image/folder/open_folder.png';
import arrow from './../../assets/image/arrow/arrows.png';
import downArrow from './../../assets/image/arrow/down_arrows.png';


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
    console.log(props.name)

    return (
        <div className="container__folder">
            {state === 'closed' && (
                <div className="container__folder-block">
                    <img src={arrow} alt="failed" /><button><FileImage text={props.name} src={closedFolder} event={triggerOpenFolderState} /></button><label>{props.name}</label>
                </div>
            )}

            {state === 'open' && (
                <div className="container__folder-block">
                    <img className="arrow-icon__down" src={downArrow} alt="failed" /><button><FileImage text={props.name} src={openedFolder} event={triggerClosedFolderState}  /></button><label>{props.name}</label>
                    {children}
                </div>
            )}
        </div>
    )
}