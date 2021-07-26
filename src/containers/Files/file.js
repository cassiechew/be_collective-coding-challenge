import React from 'react';
import './files.scss';

import fileImage from '../../assets/image/file/file.png';
import FileImage from './fileImage';

/**
 * Component for showing an individual file
 * 
 * @Component
 */
export default function File(props) {
    return(
        <div className="container__file">
            <FileImage src={fileImage} text={props.name + " " + props.size}/>
        </div>
    )
}