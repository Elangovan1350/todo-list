import React, { useState } from "react";
import Inputfeild from "./components/Inputfeild";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos);

  return (
    <section className="bg-blue-700 h-screen select-none ">
      <div className=" flex flex-col justify-center items-center">
        <h1 className="text-3xl text-white  m-8 z-10">TASKIFY</h1>
        <Inputfeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </section>
  );
};

export default App;
