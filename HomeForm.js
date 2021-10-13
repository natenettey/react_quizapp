import { useRef, useState } from 'react'
import classes from './HomeForm.module.css'



const HomeForm = (props) =>
{ 
    const [formState , setFormState] = useState()
    const nameInput = useRef()

    const submitHandler = (event) =>
    { 
        event.preventDefault()
        const passedName = nameInput.current.value
        if ( passedName.trim().length >= 2 )
        { 
            setFormState( true )
            props.onStart(passedName)
        } 
    }

    return (
        <form className={classes.form}onSubmit={submitHandler} >
            <input ref={ nameInput } type="text"></input>
            <button> Start Quiz </button>
            {!formState && <p>Error Try Again</p>}
      </form>
    );
}

export default HomeForm