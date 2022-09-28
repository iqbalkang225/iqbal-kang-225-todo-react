import styles from './Todo.module.css'
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useState, useRef, useEffect } from 'react';


const Todo = ( {id, todo, todoList, onDelete, onEdit} ) => {

    const [isEditing, setIsEditing] = useState(false)
    const [editTodoValue, setEditTodoValue] = useState(todo)
    const [isChecked, setIschecked] = useState(false);

    const inputRef = useRef()

    const deleteHandler = (id) => {
        const newTodos = todoList.filter(todo => todo.id !== id)
        onDelete(newTodos)
    }

    const editHandler = () => setIsEditing(true)

    const updateTodoHandler = (id) => {

        const newTodos = todoList.map(todo => {

            return todo.id === id ? {
                ...todo,
                todo: editTodoValue
            } : todo
        })

        onEdit(newTodos)
        
        setIsEditing(false)
    }

    useEffect(() => {
        if(isEditing) {
            inputRef.current.focus()
        }
    }, [isEditing])

    const inputChangeHHandler = (e) => {
        setEditTodoValue(e.target.value)
    }

    const checkboxHandler = (e) => {
        setIschecked(e.target.checked)
    }

    const todoClasses = `${styles.todo} ${isChecked ? styles.show : ''} ${isEditing ? styles.edit : ''}`
    
    return (
        <li className = {todoClasses}>
            {!isEditing && <input type = "checkbox" onClick = {checkboxHandler} /> }

            { isEditing ? 
            <input 
                type = "text" 
                onChange = {inputChangeHHandler}
                value = {editTodoValue} 
                ref = {inputRef}
                /> : 
                <p> {todo} </p> }

            {isEditing ?
            <button onClick = {updateTodoHandler.bind(null, id)}> Update </button> : 
            
            <div>
                <AiOutlineDelete className = {styles.icon} onClick = {deleteHandler.bind(null, id)} />

                <AiOutlineEdit className = {styles.icon} onClick = {editHandler.bind(null, id)} />
            </div>

            }

        </li>
    )
}

export default Todo