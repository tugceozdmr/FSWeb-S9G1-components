import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState([
    {
      isim: "Walk The Dog",
      id: 1528817077286, // farklı görünüyor olabilir, bunu oluşturmak için timestamp(zaman damgası) kullanabilirsiniz
      tamamlandi: false,
    },
    {
      isim: "Learn React",
      id: 1528817084358,
      tamamlandi: true,
    },
    todos.filter(todoItem => todoItem.tamamlandi === false)
  ]
  );


  return (
    <div>
      <h1>Todos</h1>
      <TodoList list={todos} updateMainState={setTodos} />
      <Form doSubmit={setTodos} current={todos} />
      <button className="but">Hide Done </button>
    </div>
  );
}
