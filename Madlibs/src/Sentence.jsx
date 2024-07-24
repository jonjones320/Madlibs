import React from 'react';


function Sentence({ words }) {
    console.log("SENTENCE: ", words.adjective, words.noun, words.verb)
    return (
        <span className='Sentence-main'>
            The {words.adjective} {words.noun} {words.verb} over the small hill
        </span>
    );
}



export default Sentence;