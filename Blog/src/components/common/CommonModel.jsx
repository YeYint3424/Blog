import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiOutlineCloseCircle } from "react-icons/ai";

const CommonModel = ({ modelLabel, setAppearModel }) => {
  const closeHandler = () => {
    setAppearModel(false);
  };
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "absolute", padding: 230 }}
    >
      <Modal.Dialog>
        <Modal.Header
          className="d-flex justify-content-end align-items-center"
          style={{ border: "none", float: "left" }}
        >
          <AiOutlineCloseCircle
            onClick={closeHandler}
            size={25}
            style={{ cursor: "pointer" }}
          />
        </Modal.Header>

        <Modal.Body
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          {modelLabel.map((title) =>
            title === "Approved" ? (
              <button className="btn btn-primary btn-model">{title}</button>
            ) : title === "Rejected" ? (
              <button className="btn btn-danger btn-model">{title}</button>
            ) : title === "Active" ? (
              <button className="btn btn-success btn-model">{title}</button>
            ) : (
              <button className="btn btn-danger btn-model">{title}</button>
            )
          )}

          <button
            className="btn btn-outline-dark btn-model"
            onClick={closeHandler}
          >
            Cancel
          </button>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default CommonModel;
