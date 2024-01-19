import { useState } from "react";
import CommonTable from "../../components/common/CommonTable";
import {
  modelLabel,
  tableBody,
  tableTitle,
} from "../../constants/admin/UserListConst";
import CommonModel from "../../components/common/CommonModel";

const UserList = () => {
  const [appearModel, setAppearModel] = useState(false);
  const fetchData = [
    {
      id: "1",
      name: "Mg Mg",
      date: "Dec 18 2023",
      email: "yy@gmail.com",
      status: "Active",
    },
    {
      id: "2",
      name: "Mg YE Yint",
      date: "Dec 1 2023",
      email: "yy@gmail.com",
      status: "Inactive",
    },
    {
      id: "3",
      name: "Muuuu",
      date: "Dec 1 2023",
      email: "yy@gmail.com",
      status: "Inactive",
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
          <span className="mx-5 bold">{data.name}</span>
        </td>
        <td>{data.date}</td>
        <td>{data.email}</td>
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

export default UserList;
