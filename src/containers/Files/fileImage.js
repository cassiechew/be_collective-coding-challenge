import React from 'react';

/**
 * Component for showing the image/icon of a file or folder
 * 
 * @Component
 */
export default function FileImage(props) {
    return (
        <div>
            <img src={props.src} alt="failed" onClick={props.event} /> {props.text}
        </div>
    )
}