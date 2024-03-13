import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="flex justify-center items-center w-10/12 flex-wrap md:gap-x-4 md:gap-4 gap-2 mt-3 flex-col md:flex-row">
      {todos.map((todo) => {
        return (
          <div>
            <SingleTodo
              todo={todo}
              key={todo.id}
              todos={todos}
              setTodo={setTodos}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
