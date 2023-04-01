import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='Question-container'>
            <h3>This is Most Important Four Question </h3>
            <div className='Question'>
                <h2 className='title'>What is difference props and state?</h2>
                 <p className='answer'>
                 State is the local state of the component which cannot be accessed and modified
                  outside of the component. It's equivalent to local variables in a function. 
                  Props, on the other hand, make components reusable by giving components the 
                 ability to receive data from their parent component in the form of props.
                 </p>
                 <h2 className='title'>How to work useState?</h2>
                 <p className='answer'>
                    It can be uesed<br />
                    const [x, setX] =uesState(0) <br />
                    the (0) is the value you want to start with, and (x) is the current
                     state value that can be used in your component. The setX function can 
                    be used to update the state , triggering a re-render of your component.
                 </p>
                 <h2 className='title'>How douse useEffect?</h2>
                 <p>
                 The function passed to useEffect will run after the render is committed to the screen. 
                 Think of effects as an escape hatch from React's purely functional world into
                  the imperative world.
                 </p>
                 <h2 className='title'>How to work react js ?</h2>
                 <p>
                   It's used for building interactive user interfaces and web applications 
                   quickly and efficiently with significantly less code than you would with vanilla JavaScript. In React, you develop your applications by 
                    creating reusable components that you can think of as independent Lego blocks.
                 </p>
            </div>
        </div>
    );
};

export default Question;