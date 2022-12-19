import React from "react";

export default function TodoList({ list }) {
  return (
    <div>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.isim} {todo.tamamlandi ? "(ok)" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}
