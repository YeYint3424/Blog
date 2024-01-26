import {FaArrowUp, FaBan, FaEdit, FaTrash } from "react-icons/fa";

export const editButton = ({id, setAppearModel, setBlogId}) => {
  const editButtonHandler = () => {
    console.log("Edit",id);
    setBlogId(id)
    setAppearModel(true)
  };
  return (
    <button className="btn btn-warning btn-sm" onClick={editButtonHandler}>
      <FaEdit />
    </button>
  );
};

export const banButton = ({id, setAppearModel, setUserId}) => {
  const banButtonHandler = () => {
    console.log("Edit",id);
    setUserId(id)
    setAppearModel(true)
  };
  return (
    <button title="ban user" className="btn btn-danger btn-sm d-flex justify-content-center align-items-center" onClick={banButtonHandler}>
      <FaBan color="white" />
    </button>
  );
};
export const upButton = ({id, setAppearModel, setUserId}) => {
  const upButtonHandler = () => {
    console.log("up",id);
    setUserId(id)
    setAppearModel(true)
  };
  return (
    <button title="upgrade to Admin" className="btn btn-info btn-sm d-flex justify-content-center align-items-center" onClick={upButtonHandler}>
      <FaArrowUp color="white" />
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
