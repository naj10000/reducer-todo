import React, { useState, useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/Reducer';

export default function Todos() {
    
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [newTodo, setNewTodo] = useState('');

    const changeHandler = event => {
        setNewTodo(event.target.value);
    }

    const submitHandler =()=> {
        setNewTodo('');
    }

    return (
        <div>
            <form>
                <input
                type="text"
                placeholder="Add Todo"
                value={newTodo}
                onChange={changeHandler}
                
                />
                <button onClick={()=>{
                    dispatch({ type: 'ADD_TODO', payload: newTodo })
                }}>Add Todo</button>
                <button onClick={()=>{
                    dispatch({ type: 'CLEAR_TODOS' })
                }}>Clear Todo</button>
            </form>
            
        </div>
    )
}
