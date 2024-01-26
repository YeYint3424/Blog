import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { PieChart, Pie, Cell, Label } from "recharts";
import CommonTable from "../../components/common/CommonTable";
import {
  modelLabel,
  tableBody,
  tableTitle,
} from "../../constants/admin/DashboardConst";
import CommonModel from "../../components/common/CommonModel";
import axios from "axios";
import { Api } from "../../constants/API";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../../appredux/tokenSlice";

const COLORS = ["#0c73f3", "#ff8600", "#f71213"];

const Dashboard = () => {
  const [tableData, setTableData] = useState([]);
  const [appearModel, setAppearModel] = useState(false);
  const [pieData, setPieData] = useState([])
  const token = useSelector(selectAccessToken)
  const [blogId, setBlogId] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Api}/admin/blog-table`);

        const tbody = tableBody(response.data, setAppearModel, setBlogId);
        setTableData(tbody);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchPie = async() =>{
      try {
        const response = await axios.get(`${Api}/admin/blog-count`);
        setPieData(response.data);
      } catch (error) {
        console.error("Error fetching data count:", error);
      }
    }
    fetchPie()
    fetchData();
  }, [appearModel,token]);

  const total = tableData.length;

  console.log(pieData);
  const bodyData = () =>
    tableData.map((data, index) => (
      <tr key={index}>
        <td>{data.title}</td>
        <td>{data.name}</td>
        <td>{data.date}</td>
        <td>{data.category}</td>
        <td>{data.status}</td>
        <td>{data.edit}</td>
      </tr>
    ));
  return (
    <div>
      {appearModel && (
        <CommonModel modelLabel={modelLabel} blogId={blogId} setAppearModel={setAppearModel} />
      )}
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
              data={pieData}
              cx={100}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              <Label value="Total" position="center" dy={-10} />
              <Label
                style={{ fontWeight: "bold", color: "#0c73f3" }}
                value={total}
                position="center"
                dy={10}
              />
            </Pie>
          </PieChart>
        </Col>
        <Col className="m-0 p-0" lg={3}>
          {pieData.map((entry, index) => (
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
          {pieData.map((entry, index) => (
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
      <CommonTable titles={tableTitle} bodyData={bodyData()} />
    </div>
  );
};

export default Dashboard;
