import { useState } from 'react'


function Story({ story }) {
    return (
        <div className='Story-main'>
            <h3 className='Story-header'>
                Your story: 
            </h3>
            <p className='Story-paragraph'>
                { story }
            </p>
        </div>
    )
}



export default Story;