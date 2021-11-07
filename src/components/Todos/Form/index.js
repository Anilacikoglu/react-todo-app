import { useEffect, useState } from 'react'
const defaultInputValue = [""];
function Form({ addTodo, todos }) {
    const [form, setForm] = useState(defaultInputValue);

    useEffect(() => {
        setForm(defaultInputValue)
    }, [todos])

    const onChangeInput = (e) => {
        setForm([...form , e.target.value])
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (form.value === "") {
            return false;
        }
        addTodo([...todos, form])
    }

    return (
        <form onSubmit={onSubmit}>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus  onChange={onChangeInput}/>
        </form>
    )
}

export default Form
