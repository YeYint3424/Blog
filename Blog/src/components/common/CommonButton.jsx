import { FaEdit, FaTrash } from "react-icons/fa";

export const editButton = ({id}) => {
  const editButtonHandler = () => {
    console.log("Edit",id);
  };
  return (
    <button className="btn btn-warning btn-sm" onClick={editButtonHandler}>
      <FaEdit />
    </button>
  );
};

export const deleteButton = ({id}) => {
  const deleteButtonHandler = () => {
    console.log("Deletee", id);
  };
  return (
    <button className="btn btn-danger btn-sm" onClick={deleteButtonHandler}>
      <FaTrash />
    </button>
  );
};
