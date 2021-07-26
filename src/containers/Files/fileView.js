import React from 'react';
import './files.scss';

import FileList from './fileList';

/**
 * Component for the View of files. This allows for extension of component
 * 
 * @Component
 */
export default function FileView(props) {

    return (
        <div className="container">
            <FileList setParentNumFiles={props.setParentNumFiles} setParentFileSize={props.setParentFileSize} />
        </div>
    )
}