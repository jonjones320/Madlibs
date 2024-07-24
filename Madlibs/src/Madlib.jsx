import { useState } from 'react'
import MadlibForm from './MadlibForm'
import Sentence from './Sentence'
import Story from './Story'

function Madlib() {
    const [words, setWords] = useState({});
    const [story, setStory] = useState("");

    function handleFormSubmit() {
        setWords(formData);
        setStory(<Sentence words={formData} />)
    }

    return (
        <div>
            <h1>Madlib!</h1>
            <MadlibForm onFormSubmit={handleFormSubmit}/>
            <Story story={story}/>
        </div>
    )
};

export default Madlib;