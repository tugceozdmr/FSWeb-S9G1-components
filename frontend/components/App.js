import React, { useState } from "react";
// import "./Form";

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
  ]);
  const [newToDo, setnewToDo] = useState("");
  const handleChange = (event) => {
    setnewToDo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        isim: newToDo,
        id: Date.now(),
        tamamlandi: false,
      },
    ]);
    setnewToDo("");
  };

  return (
    <div>
      Todo App
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.isim} {todo.tamamlandi ? "(ok)" : ""}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newTodo"
          placeholder="type to do"
          onChange={handleChange}
          value={newToDo}
        />
        <input type="submit" value="ekle" disabled={newToDo === ""} />
      </form>
    </div>
  );
}
