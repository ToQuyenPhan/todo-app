import React, { useState } from 'react';
import { FiDelete, FiEdit3 } from "react-icons/fi";
import TodoForm from './TodoForm';

function Todo({ todos, completeTodo, removeTodo, editTodo }) {
    const [editing, setEditing] = useState({
        id: null,
        value: ''
    });

    const handleSubmit = value => {
        editTodo(editing.id, value);
        setEditing({
            id: null,
            value: ''
        });
    }

    if(editing.id){
        return <TodoForm edit={editing} onSubmit={handleSubmit} />
    }

    return todos.map((todo, index) => (
        <div key={index} className={todo.isCompleted ? 'todo-row complete' : 'todo-row'}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <FiEdit3 className='edit-icon' onClick={() => setEditing({id: todo.id, value: todo.text})}/>
                <FiDelete className='delete-icon' onClick={() => removeTodo(todo.id)}/>
            </div>
        </div>
    ))
}

export default Todo;