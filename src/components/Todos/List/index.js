import React from 'react'

function List({ todos }) {
    return (
        <div>
            {
                todos.map((todo, i) => (
                    <li key={i}>
                        <div className="view">
                            <input className="toggle" type="checkbox" />
                            <label>{todo}</label>
                            <button className="destroy"></button>
                        </div>
                    </li>

                ))
            }

        </div>
    )
}


export default List
