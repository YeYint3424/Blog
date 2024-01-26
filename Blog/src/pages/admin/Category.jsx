import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Modal, Row, Table } from "react-bootstrap";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { Api } from "../../constants/API";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../../appredux/tokenSlice";
import SuccessfulBox from "../../components/common/SuccessfulBox";
import FailBox from "../../components/common/FailBox";
import DuplicateBox from "../../components/common/DuplicateBox";
import { FaUpload } from 'react-icons/fa';

export default function Category() {
  const [showModel, setShowModel] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const token = useSelector(selectAccessToken);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [duplicate, setDuplicate] = useState(false);
  const [category,setCategory] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = category.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleDelete = async(id) => {
    try {
      const result = await axios.patch(`${Api}/category/delete/${id}`)
      setSuccess(true)
      setTimeout(()=>{
        setSuccess(false);
      },3000)
    } catch (error) {
      setFail(true)
      setTimeout(()=>{
        setFail(false);
      },3000)
    }

  };
  const handleOpen = async(id) => {
    try {
      const result = await axios.patch(`${Api}/category/update/${id}`, {
        status : "active"
      })
      setSuccess(true)
      setTimeout(()=>{
        setSuccess(false);
      },3000)
    } catch (error) {
      setFail(true)
      setTimeout(()=>{
        setFail(false);
      },3000)
    }

  };

  useEffect(() => {
    const closeHandler = () => {
      setShowModel(false);
    };

    const escapeKeyHandler = (event) => {
      if (event.key === "Escape") {
        setShowModel(false);
      }
    };

    document.addEventListener("keydown", escapeKeyHandler);

    return () => {
      document.removeEventListener("keydown", escapeKeyHandler);
    };
  }, []);

  const addCategory = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `${Api}/category/create`,
        {
          name: newCategory,
        },
        {
          headers: {
            token: token,
          },
        }
      );
      console.log(result.data);
      setShowModel(false);
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 3500);
    } catch (error) {
      console.log("Add category error:", error.message);
      if (error.response.status === 409){
        setDuplicate(true);
        setTimeout(() => {
          setDuplicate(false);
        },3000)
      }else {
        setFail(true);
        setTimeout(()=>{
          setFail(false);
        },3000)
      }
    }
  };

  useEffect(()=>{
    const fetchData = async() => {
      const res = await axios.get(`${Api}/admin/category-table`)
      setCategory(res.data)
    }
    fetchData()
  },[newCategory,category])
  return (
    <>
      {showModel && (
        <div
          className="modal show"
          style={{ display: "block", position: "absolute", padding: 230 }}
        >
          <Modal.Dialog>
            <Modal.Header
              className="d-flex justify-content-between align-items-center"
              style={{ border: "none", float: "left" }}
            >
              <h3>Add Category</h3>
              <AiOutlineCloseCircle
                onClick={() => setShowModel(false)}
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
                <form>
                  <input
                    type="text"
                    className="inputLogin border-1 bg-secondary bg-opacity-25"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                  />
                  <Row>
                    <Col lg={6}>
                      <button
                        className="btn btn-model btn-outline-success bold"
                        onClick={addCategory}
                      >
                        Add
                      </button>
                    </Col>
                    <Col lg={6}>
                      <button
                        type="button"
                        className="btn btn-outline-dark bold btn-model"
                        onClick={() => setShowModel(false)}
                      >
                        Cancel
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Modal.Body>
          </Modal.Dialog>
        </div>
      )}
      {success && (
        <div className="d-flex justify-content-center align-items-center">
          <SuccessfulBox />
        </div>
      )}
      {duplicate && (
        <div className="d-flex justify-content-center align-items-center">
          <DuplicateBox />
        </div>
      )}
      {fail && (
        <div className="d-flex justify-content-center align-items-center">
          <FailBox />
        </div>
      )}
      <div className="d-flex justify-content-end align-items-center mb-4">
        <button
          className="btn btn-md btn-primary bold"
          onClick={() => setShowModel(true)}
        >
          Create Category
        </button>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Category-name</th>
            <th>Created by</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length !== 0 ? (
            currentItems.map((cate, index) => (
              <tr key={cate.id}>
                <td>{cate.name}</td>
                <td>{cate.username}</td>
                <td>{ cate.status == 'active' ? 
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(cate.id)}
                  >
                    <FaTrash size={15} color="white" />
                  </button>
                  :
                  <button className="btn btn-warning btn-sm"
                    onClick={()=> handleOpen(cate.id)}
                  >
                    <FaUpload size={15} color="black" />
                  </button>
                  }
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                There are no categories to display.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <ul className="pagination justify-content-center">
        {Array.from({ length: Math.ceil(category.length / itemsPerPage) }, (_, i) => i + 1).map((pageNumber) => (
          <li key={pageNumber} className={`page-item ${pageNumber === currentPage ? "active" : ""}`}>
            <button onClick={() => paginate(pageNumber)} className="page-link">
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
