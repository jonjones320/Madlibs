import React from 'react';


function Sentence({ adjective, noun, verb }) {

    return (
        <span className='Sentence-main'>The {adjective} {noun} {verb} over the small hill</span>
    );
}



export default Sentence;