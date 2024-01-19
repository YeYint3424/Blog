import CommonTable from "../../components/common/CommonTable";
import CommonModel from "../../components/common/CommonModel";
import { tableBody, tableTitle } from "../../constants/admin/DashboardConst";
import { modelLabel } from "../../constants/admin/DashboardConst";
import { useState } from "react";

const BlogList = () => {
  const [appearModel, setAppearModel] = useState(false);

  const fetchData = [
    {
      id: "1",
      name: "Mg Mg",
      date: "Dec 18 2023",
      category: "IT",
      status: "Approved",
    },
    {
      id: "2",
      name: "Mg YE Yint",
      date: "Dec 1 2023",
      category: "IT",
      status: "Pending",
    },
    {
      id: "3",
      name: "Muuuu",
      date: "Dec 1 2023",
      category: "IT",
      status: "Rejected",
    },
  ];
  const tbody = tableBody(fetchData, setAppearModel);
  const bodyData = () =>
    tbody.map((data, index) => (
      <tr key={index}>
        <td className="d-flex align-items-center">
          <img
            src="https://i.imgflip.com/73u9iv.jpg"
            alt="user"
            width={40}
            height={40}
          />
          <span className="mx-5">{data.name}</span>
        </td>
        <td>{data.date}</td>
        <td>{data.category}</td>
        <td>{data.status}</td>
        <td>{data.edit}</td>
      </tr>
    ));

  return (
    <>
      {appearModel && (
        <CommonModel modelLabel={modelLabel} setAppearModel={setAppearModel} />
      )}
      <CommonTable titles={tableTitle} bodyData={bodyData()} />
    </>
  );
};

export default BlogList;
