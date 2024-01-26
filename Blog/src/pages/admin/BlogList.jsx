import CommonTable from "../../components/common/CommonTable";
import CommonModel from "../../components/common/CommonModel";
import { tableBody, tableTitle } from "../../constants/admin/DashboardConst";
import { modelLabel } from "../../constants/admin/DashboardConst";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAxios } from "../../Hooks/useAxios";
import { Api } from "../../constants/API";

const BlogList = () => {
  const [tableData, setTableData] = useState([]);
  const [appearModel, setAppearModel] = useState(false);
  const [blogId,setBlogId] = useState()

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

    fetchData();
  }, [appearModel ]);

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
    <>
      {appearModel && (
        <CommonModel modelLabel={modelLabel} setAppearModel={setAppearModel} blogId={blogId} />
      )}
      <CommonTable titles={tableTitle} bodyData={bodyData()} />
    </>
  );
};

export default BlogList;
