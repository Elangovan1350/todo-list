import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { FiEdit } from "react-icons/fi";
import { MdDelete, MdDone, MdDoneAll } from "react-icons/md";

interface Props {
  todo: Todo;
  key: number;
  todos: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo: React.FC<Props> = ({ todo, key, todos, setTodo }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id && !edit ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodo(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodo(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const EditInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    EditInputRef.current?.focus();
  }, [edit]);
  return (
    <form
      key={key}
      className="bg-yellow-500 w-72  md:w-96  h-14 rounded flex  justify-between items-center px-2 "
      onSubmit={(e) => handleEdit(e, todo.id)}
    >
      {edit ? (
        <input
          ref={EditInputRef}
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="outline-none w-full m-2 p-1"
        />
      ) : todo.isDone ? (
        <p className="line-through decoration-2 capitalize">{todo.todo}</p>
      ) : (
        <p className="capitalize">{todo.todo}</p>
      )}

      <div className="flex gap-2">
        <span
          className="cursor-pointer"
          onClick={() => setEdit(() => (!todo.isDone && !edit ? !edit : false))}
        >
          <FiEdit className="hover:scale-125" />
        </span>
        <span className="cursor-pointer" onClick={() => handleDelete(todo.id)}>
          <MdDelete className="hover:scale-125" />
        </span>
        <span className="cursor-pointer " onClick={() => handleDone(todo.id)}>
          {todo.isDone ? (
            <MdDoneAll className="hover:scale-125 text-blue-600" />
          ) : (
            <MdDone className="hover:scale-125" />
          )}
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
