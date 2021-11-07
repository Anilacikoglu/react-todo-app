import React from 'react'
import { useState, useEffect } from 'react';
import List from "./List"
import Form from "./Form"
function Todos() {

	const [todos, setTodos] = useState(["Todo1", "Todo2"])
	useEffect(() => {
		console.log(todos);
	}, [todos]);



	return (
		<div>
			<section className="todoapp">
				<header classNameName="header">
					<h1>Todos</h1>
					<Form addTodo={setTodos} todos={todos} />
				</header>

				<section className="main">
					<input className="toggle-all" type="checkbox" />
					<label for="toggle-all">
						Mark all as complete
					</label>

					<ul className="todo-list">
						<List todos={todos} />
					</ul>
				</section>


			</section>





		</div>
	)
}

export default Todos
