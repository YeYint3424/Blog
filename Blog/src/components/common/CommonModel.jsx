import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Api } from "../../constants/API";
import axios from "axios";

const CommonModel = ({ modelLabel, setAppearModel, blogId }) => {
  const closeHandler = () => {
    setAppearModel(false);
  };
  const handleApproved = async (blogId) => {
    try {
      const status = await axios.patch(`${Api}/admin/blog/change/${blogId}`, {
        status: "approved",
      });
      console.log(status.data);
      setAppearModel(false);
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleRejected = async (blogId) => {
    try {
      const status = await axios.patch(`${Api}/admin/blog/change/${blogId}`, {
        status: "rejected",
      });
      setAppearModel(false);
    } catch (error) {
      console.error(error.message);
    }
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
            flexDirection: "column",
          }}
        >
          {modelLabel.map((title) =>
            title === "Approved" ? (
              <button
                className="btn btn-primary btn-model"
                onClick={() => handleApproved(blogId)}
              >
                {title}
              </button>
            ) : (
              <button
                className="btn btn-danger btn-model"
                onClick={() => handleRejected(blogId)}
              >
                {title}
              </button>
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
