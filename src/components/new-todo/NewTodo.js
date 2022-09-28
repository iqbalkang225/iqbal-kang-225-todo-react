
import { useEffect, useRef, useState } from 'react';
import styles from './NewTodo.module.css'

const NewTodo = (props) => {

    const [todo, setTodo] = useState('')
    const [isEntered, setIsEntered] = useState(null)

    const todoInput = useRef()

    const inputChangeHHandler = (e) => {
        setTodo(e.target.value)
        setIsEntered(true)

    }

    const submitHandler = (e) => {
        e.preventDefault()

        if(!todoInput.current.value) {
            setIsEntered(false)
            setTimeout(() => setIsEntered(true), 100)
            return
        }

        const enteredTodo = {
            id : Math.random(),
            todo: todo
        }

        props.onSubmit(enteredTodo)

        setTodo('')
    }

    useEffect(() => {
        todoInput.current.focus()
    },[todo])


    return (
        <form onSubmit = {submitHandler}>
            <div className = {`${styles['form-control']} ${!isEntered ? styles.error : ''}`}>
                <input
                    type = "text"
                    placeholder = "Add a todo"
                    onChange = {inputChangeHHandler}
                    value = {todo}
                    ref = {todoInput}
                    />
                <button>Add</button>
            </div>
        </form>
    )
}

export default NewTodo;