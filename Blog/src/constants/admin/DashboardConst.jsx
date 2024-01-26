import { Link } from "react-router-dom";
import { deleteButton, editButton } from "../../components/common/CommonButton";

export const tableTitle = ["Title","Created By", "Created-date", "Category", "Status", ""];

export const tableBody = (fetchData, setAppearModel, setBlogId) => {
  return fetchData.map((data) => {
    return {
      title:<NameLink name={data.title} blogId={data.id} />,
      name: data.username,
      date: data.date,
      category: data.category,
      status: <StatusColor status={data.status} />,
      edit:
        data.status === "pending"
          ? editButton({ id: data.id, setAppearModel, setBlogId })
          : null,
    };
  });
};

import React from "react";

export default function StatusColor({ status }) {
  return (
    <>
      {status == "approved" ? (
        <b style={{ color: "#0c73f3" }}>{status}</b>
      ) : status == "pending" ? (
        <b style={{ color: "#ff8600" }}>{status}</b>
      ) : (
        <b style={{ color: "#f71213" }}>{status}</b>
      )}
    </>
  );
}

export const NameLink = ({ name, blogId }) => {
  return (
    <Link to={`/article/${blogId}`}>
      <b style={{ textDecoration: "underline" }}>{name}</b>
    </Link>
  );
};

export const modelLabel = ["Approved", "Rejected"];
