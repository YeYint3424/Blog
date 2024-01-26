import React, { useEffect, useState } from "react";
import ProfileCard from "../../components/ProfileCard";
import { Card, CardBody, CardHeader } from "react-bootstrap";
import CommonTable from '../../components/common/CommonTable'
import { blogTableTitle, tableBody, userBlogTable } from "../../constants/user/UserConst";
import { selectUser } from "../../appredux/userSlice";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Api } from "../../constants/API";
import { selectAccessToken } from "../../appredux/tokenSlice";

export default function Profile() {
  const [blog,setBlog] = useState([])
  const [category,setCategory] = useState([])

  const user = useSelector(selectUser);
  const token = useSelector(selectAccessToken);
  const navigate = useNavigate() 
  useEffect(() => {
    if (!user || Object.keys(user).length === 0 || user.status !== 'active') {
      navigate('/auth/login');
    }else if(!token || Object.keys(token)===null){
      navigate('/auth/login')
    } 
    else {
      const fetchData = async () => {
        try {
          const url = `${Api}/user/blog-table/${user.id}`;
          console.log('Fetching data from:', url);
          const response = await axios.get(url, {
            headers: {
              token : token
            },
          });
          console.log('Response:', response);
          setBlog(response.data);
        } catch (error) {
          console.error("Error fetching data:", error.message);
        }
      };

      fetchData();
    }
  }, [user, navigate]);

  const blogTableData = userBlogTable(blog)
  return (
    <div style={{fontFamily: 'serif'}}>
      <div className="p-5">
        <ProfileCard/>
        <div className="mt-4 d-flex justify-content-end align-items-center"> 
            <Link to={'/user/create-blog'}><button className="btn btn-warning btn-lg text-light">Create Blog</button></Link>
        </div>
        <Card className="mt-4">
          <CardHeader className="border-0 bg-light d-flex justify-content-between align-items-center pt-3 pb-2">
            <h4>Blog List</h4>
            <h4>Total Number Of Blog : <span className="bold">{blog.length}</span></h4>
          </CardHeader>
          <CardBody className="pt-0">
            <CommonTable titles={blogTableTitle} bodyData={blogTableData}/>
            <div className="d-flex justify-content-between align-items-center">
              <button className="btn btn-primary px-5 py-2">Previous</button>
              <button className="btn btn-primary px-5 py-2">Next</button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
