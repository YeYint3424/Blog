import { useEffect, useState } from "react";
import CommonTable from "../../components/common/CommonTable";
import {
  modelLabel,
  tableBody,
  tableTitle,
} from "../../constants/admin/UserListConst";
import CommonModel from "../../components/common/CommonModel";
import axios from "axios";
import { Api } from "../../constants/API";
import { Col, Modal, Row } from "react-bootstrap";
import { AiOutlineCloseCircle } from "react-icons/ai";
import FailBox from "../../components/common/FailBox";

const UserList = () => {
  const [appearModel, setAppearModel] = useState(false);
  const [userId, setUserId] = useState();
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const [fetchData, setFetchData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`${Api}/admin/user-table`);
        setFetchData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetch();
  }, [appearModel]);
  const tbody = tableBody(fetchData, setAppearModel, setUserId);
  const bodyData = () =>
    tbody.map((data, index) => (
      <tr key={index}>
        <td>
          <b>{data.name}</b>
        </td>
        <td>{data.email}</td>
        <td>{data.date}</td>
        <td>{data.status}</td>
        <td>{data.ban}</td>
      </tr>
    ));

  const handleBanUser = async (userId) => {
    try {
      const user = await axios.patch(`${Api}/admin/user/ban/${userId}`);
      console.log(user);
      setAppearModel(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      console.log(error);
      setFail(true);
      setTimeout(() => {
        setFail(false);
      }, 3000);
    }
  };

  return (
    <>
      {appearModel && (
        // <CommonModel modelLabel={modelLabel} blogId={userId} setAppearModel={setAppearModel} />
        <div
          className="modal show"
          style={{ display: "block", position: "absolute", padding: 230 }}
        >
          <Modal.Dialog>
            <Modal.Header
              className="d-flex justify-content-between align-items-center"
              style={{ border: "none", float: "left" }}
            >
              <h3 className="text-danger">Ban this User?</h3>
              <AiOutlineCloseCircle
                onClick={() => setAppearModel(false)}
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
              className="mt-0 pt-0"
            >
              <div className="px-3">
                <Row>
                  <Col lg={6}>
                    <button
                      className="btn btn-danger btn-model"
                      onClick={() => handleBanUser(userId)}
                    >
                      Confirm
                    </button>
                  </Col>
                  <Col lg={6}>
                    <button
                      className="btn btn-secondary btn-model"
                      onClick={() => setAppearModel(false)}
                    >
                      Cancel
                    </button>
                  </Col>
                </Row>
              </div>
            </Modal.Body>
          </Modal.Dialog>
        </div>
      )}
      {fail && (
        <div className="d-flex justify-content-center align-items-center">
          <FailBox />
        </div>
      )}
      {success && (
        <div className="d-flex justify-content-center align-items-center">
          <div className="position-absolute successful w-100 h-75">
            <div className="successful-box">
              <h1 className="text-center">Successfully Ban</h1>
            </div>
          </div>
        </div>
      )}
      <div className="px-4 bg-light ">
        <CommonTable titles={tableTitle} bodyData={bodyData()} />
      </div>
    </>
  );
};

export default UserList;
