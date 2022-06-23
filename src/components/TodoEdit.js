import { TbEdit } from "react-icons/tb";

const TodoEdit = ({ id, todos, setEditTodo }) => {
  const handleEdit = (id) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => handleEdit(id)}
    >
      <TbEdit size={24} />
    </button>
  );
};

export default TodoEdit;
