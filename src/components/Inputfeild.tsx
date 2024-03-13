import React, { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const Inputfeild: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
      className="flex w-10/12 relative items-center justify-center "
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="w-full rounded-3xl px-7 py-4 border-none transition-all duration-200  shadow-inner   shadow-gray-700 focus:shadow-xl outline-none "
      />
      <button
        type="submit"
        className="absolute size-12 bg-blue-600 rounded-full right-0 m-2 border-none text-white shadow-md shadow-black transition-all duration-200 hover:bg-blue-500 active:scale-90 active:shadow "
      >
        Go
      </button>
    </form>
  );
};

export default Inputfeild;
