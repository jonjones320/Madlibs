### `Madlib`
- Manages state 
- Displays title
- Displays `MadlibForm`
- Integrates `MadlibForm`, `Sentence` and `Story`

### `MadlibForm`
- Contains `InputField`'s
- Handles user input and submit
- Passes user input up to `Madlib` component

### `Sentence`
- Receives words from `MadlibForm`
- Inputs words into the sentence
- Passes the sentence to the `Story` component

### `Story`
- Receives completed sentence(s) 
- Displays sentence(s)
