import React from "react";
import ProfileCard from "../../components/ProfileCard";
import { Card, CardBody, CardHeader } from "react-bootstrap";
import CommonTable from '../../components/common/CommonTable'
import { blogTableTitle, tableBody, userBlogTable } from "../../constants/user/UserConst";

export default function Profile() {
  const user = {
    name: "Ye Yint",
    email: "ye@gmail.com",
    status: "Active",
  };

  const blog = [
    {
      id: '1',
      title : 'Hello',
      date : 'Dec 18 2023',
      status : 'Approved',
    },
    {
      id: '2',
      title : 'World',
      date : 'Dec 18 2023',
      status : 'Pending',
    },
    {
      id: '3',
      title : 'Hello World',
      date : 'Dec 18 2023',
      status : 'Rejected',
    },
    {
      id: '4',
      title : 'KKKKHello',
      date : 'Dec 18 2023',
      status : 'Approved',
    },
    {
      id: '5',
      title : 'Hello',
      date : 'Dec 18 2023',
      status : 'Rejected',
    },
    {
      id: '6',
      title : 'DIDID',
      date : 'Dec 18 2023',
      status : 'Approved',
    },
  ]
  const blogTableData = userBlogTable(blog)
  return (
    <div style={{fontFamily: 'serif'}}>
      <div className="p-5">
        <ProfileCard user={user} />
        <div className="mt-4 d-flex justify-content-end align-items-center"> 
            <button className="btn btn-warning btn-lg text-light">Create Blog</button>
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
