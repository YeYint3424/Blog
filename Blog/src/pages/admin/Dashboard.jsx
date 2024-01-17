import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import { PieChart, Pie, Cell, Label } from "recharts";

const data = [
  { name: "Approve", value: 10 },
  { name: "Pending", value: 7 },
  { name: "Reject", value: 5 },
];

const total = data.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0);

const COLORS = ["#0c73f3", "#ff8600", "#f71213"];

const Dashboard = () => {
  return (
    <div>
      <Row className="m-0 p-0">
        <Col lg={6} className="m-0 p-0">
          <label>Blog List</label>
        </Col>
        <Col lg={6} className="m-0 p-0">
          <label>Blog Information</label>
        </Col>
      </Row>
      <Row className="m-0 p-0 d-flex align-items-center">
        <Col className="m-0 p-0" lg={3}>
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx={100}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              <Label value="Total" position="center" dy={-10}/>
              <Label style={{fontWeight: "bold", color:'#0c73f3'}} value={total} position="center" dy={10}/>
            </Pie>
          </PieChart>
        </Col>
        <Col className="m-0 p-0" lg={3}>
          {data.map((entry, index) => (
            <div
              key={index}
              className="d-flex align-items-center justify-content-start"
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: COLORS[index],
                }}
              ></div>
              <p className="m-3">{entry.name}</p>
            </div>
          ))}
        </Col>
        <Col className="m-0 p-0" lg={6}>
          {data.map((entry, index) => (
            <div
              key={index}
              className="d-flex align-items-center justify-content-start"
            >
              <button
                style={{
                  width: "90%",
                  height: 45,
                  backgroundColor: COLORS[index],
                }}
                className="btn text-light my-1 text-center"
              >
                {entry.value}
              </button>
            </div>
          ))}
        </Col>
      </Row>
      <div className="bg-light w-100 pt-3 p-2 mb-0">
        <h5 className="px-3">Blog Status</h5>
      </div>
      <Table title="Blog Status mt-0">
        <thead>
          <tr>
            <th>User</th>
            <th>Date In</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="d-flex align-items-center">
              <img
                src="https://i.imgflip.com/73u9iv.jpg"
                alt="user"
                width={40}
                height={40}
              />
              <span className="mx-5"> user1</span>
            </td>
            <td>Dec 18 2023</td>
            <td>IT</td>
            <td style={{color:'#0c73f3'}}>Approve</td>
          </tr>
          <tr>
            <td className="d-flex align-items-center">
              <img
                src="https://i.imgflip.com/73u9iv.jpg"
                alt="user"
                width={40}
                height={40}
              />
              <span className="mx-5"> user1</span>
            </td>
            <td>Dec 18 2023</td>
            <td>IT</td>
            <td style={{color:'#0c73f3'}}>Approve</td>
          </tr>
          <tr>
            <td className="d-flex align-items-center">
              <img
                src="https://i.imgflip.com/73u9iv.jpg"
                alt="user"
                width={40}
                height={40}
              />
              <span className="mx-5"> user1</span>
            </td>
            <td>Dec 18 2023</td>
            <td>IT</td>
            <td style={{color:'#0c73f3'}}>Approve</td>
          </tr>
          <tr>
            <td className="d-flex align-items-center">
              <img
                src="https://i.imgflip.com/73u9iv.jpg"
                alt="user"
                width={40}
                height={40}
              />
              <span className="mx-5"> user1</span>
            </td>
            <td>Dec 18 2023</td>
            <td>IT</td>
            <td style={{color:'#0c73f3'}}>Approve</td>
          </tr>
          
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
