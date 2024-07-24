import React from 'react';


function Sentence({ words }) {
    return (
        <span className='Sentence-main'>
            The {words.adjective} {words.noun} {words.verb} over the small hill.
        </span>
    );
}


export default Sentence;