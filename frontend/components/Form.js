import React, { useState } from "react";

export default function Form(props) {
  const { doSubmit, current } = props;

  const [newToDo, setnewToDo] = useState("");
  
  const handleChange = (event) => {
    setnewToDo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    doSubmit([
      ...current,
      {
        isim: newToDo,
        id: Date.now(),
        tamamlandi: false,
      },
    ]);
    setnewToDo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      className="plc"
        type="text"
        name="newTodo"
        placeholder="type to do"
        onChange={handleChange}
        value={newToDo}
      />
      <input className="but2 "type="submit" value="Add" disabled={newToDo === ""} />
    </form>
  );
}
