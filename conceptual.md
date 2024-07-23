# Conceptual Exercise
--------
Answer the following questions below:

- What is React? When and why would you use it?  
- 
	- React is a framework for adapting Node.js to the client-side.

- What is Babel?  
- 
	- Babel is a translating library that, in this circumstance, allows a client to understand JSX.

- What is JSX?  
- 
	- JSX is a library that allows Javascript to be implanted in HTML. 

- How is a Component created in React?  
- 
	- A Component in React is simply a function that is built more like a class. The main is how React handles these "functions" that we have declared as a Component.

- What are some difference between state and props?  
- 
	- The biggest difference is that state will be changed within a Component, but props will never change. 
	- Another difference is that props are "fed" to a Component from the exterior, whereas, state exists within a component. 

- What does "downward data flow" refer to in React?  
- 
	- This term refers to the flow of data between React Components. Specifically, the flow of data from a parent Component to its children. Instead of a child passing data "up" to the parent.

- What is a controlled component?  
- 
	- A controlled component is a function that operates within React's influence.

- What is an uncontrolled component?  
- 
	- An uncontrolled component is one that is handled by the DOM, outside of React's "state". 

- What is the purpose of the `key` prop when rendering a list of components?  
- 
	- React strongly encourages `key`'s so that it can keep track of all of the elements in its environment. 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?  
- 
	- An array index is too prone to change and not unique enough to be a `key` prop for React, considering the wide scope of adaptability that React operates across. 

- Describe useEffect.  What use cases is it used for in React components?  
- 
	- The use-cases that `useEffect` is usually used in is to make side-effects of operations, such as, retrieving data or directly updating the DOM.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?   
- 
	- `useRef` will store a mutable value across React re-renders. Any changes to a ref value do not cause a component to re-render. 

- When would you use a ref? When wouldn't you use one?  
- 
	- You would use a ref for timers or to keep track of previous changes to the State such as values changed in a form.
	- You don't want to use a ref anytime you can stay within the Component's state. It is better to have React tracking as much as possible to avoid conflicts.

- What is a custom hook in React? When would you want to write one?  
- 
	- A custom hook is a reusable function that React identifies as a hook in-order to allow it to operate like `useState`. 
	- You should use a custom hook anytime you have a function repeating throughout an app. All of the repeated logic can be consolidated and used from one custom hook.
