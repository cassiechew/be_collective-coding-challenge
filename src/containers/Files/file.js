import React from 'react';
import './files.scss';

import fileImage from '../../assets/image/file/file.png';
import FileImage from './fileImage';

const selectImage = (type) => {

}

// TODO
// figure out props

export default function File(props) {
    return(
        <div>
            <FileImage src={fileImage} /> {props.name + " " + props.size}
        </div>
    )
}