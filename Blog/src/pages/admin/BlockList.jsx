import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Api } from "../../constants/API";
import { FaUnlockAlt } from 'react-icons/fa';
import SuccessfulBox from "../../components/common/SuccessfulBox";
import FailBox from "../../components/common/FailBox";

export default function BlockList() {
const [blockUsers,setBlockUsers] = useState([])
const [success, setSuccess] = useState(false);
const [fail, setFail] = useState(false);

useEffect(()=>{
  const fetchData = async() => {
    try {
      const data = await axios.get(`${Api}/admin/block-table`)
      console.log(data.data);
      setBlockUsers(data.data)
    } catch (error) {
      console.log('Fetching Fail : ',error.message);
    }
  }
  fetchData()
},[success, fail])

const handleUnblock = async (id) => {
  try {
    const result = await axios.patch(`${Api}/admin/user/unban/${id}`);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  } catch (error) {
    setFail(true);
    setTimeout(() => {
      setFail(false);
    }, 3000);
  }
};

  return (
    <>
    {success && (
        <div className="d-flex justify-content-center align-items-center">
          <SuccessfulBox />
        </div>
      )}
      {fail && (
        <div className="d-flex justify-content-center align-items-center">
          <FailBox />
        </div>
      )}
      <Table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { blockUsers.length != 0 ? blockUsers.map(user=>(
          <tr>
            <td>
              {user.username}
            </td>
            <td>{user.email}</td>
            <td><button className="btn btn-sm btn-warning"
             onClick={() => handleUnblock(user._id)}><FaUnlockAlt size={15} /></button></td>
          </tr>
          )): <tr>
            There is no Block User
            </tr>}
        </tbody>
      </Table>
    </>
  );
}
