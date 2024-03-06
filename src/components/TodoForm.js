import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleInputChange = e => {
        setInput(e.target.value);   
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input className='todo-input' name='task' type='text' placeholder='Add a task...' value={input} 
                onChange={handleInputChange} ref={inputRef}/>
            <button className='todo-button'>Add</button>
        </form>
    )
}

export default TodoForm;