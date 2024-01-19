import { Link } from "react-router-dom";
import { deleteButton, editButton } from "../../components/common/CommonButton";

export const tableTitle = ["User", "Date In", "Category", "Status", ""];

export const tableBody = (fetchData, setAppearModel) => {
  return fetchData.map((data) => ({
    name: <NameLink name={data.name} />,
    date: data.date,
    category: data.category,
    status: <StatusColor status={data.status} />,
    edit: editButton({ id: data.id ,setAppearModel}),
  }));
};

import React from "react";

export default function StatusColor({ status }) {
  return (
    <>
      {status == "Approved" ? (
        <b style={{ color: "#0c73f3" }}>{status}</b>
      ) : status == "bending" ? (
        <b style={{ color: "#ff8600" }}>{status}</b>
      ) : (
        <b style={{ color: "#f71213" }}>{status}</b>
      )}
    </>
  );
}

export const NameLink = ({ name }) => {
  return (
    <Link to={""}>
      <b style={{textDecoration: 'underline'}}>{name}</b>
    </Link>
  );
};

export const modelLabel = ['Approved', 'Rejected']