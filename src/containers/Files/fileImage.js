import React from 'react';

// TODO: load up image based on prop. 
// Conditional / actual image passed in / 'url' passed in

export default function FileImage(props) {
    return (
        <div>
            <img src={props.src} alt="failed" onClick={props.event} />
        </div>
    )
}