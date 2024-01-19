import { editButton } from "../../components/common/CommonButton";

export const tableTitle = ["Username", "Email", "Date In", "Status", ""];

export const tableBody = (fetchData, setAppearModel) => {
  return fetchData.map((data) => ({
    name: data.name,
    email: data.email,
    date: data.date,
    status: <UserStatusColor status={data.status} />,
    edit: editButton({ id: data.id ,setAppearModel}),
  }));
};

import React from "react";

export default function UserStatusColor({ status }) {
  return (
    <>
      {status == "Active" ? (
        <b style={{ color: "green" }}>{status}</b>
      ) : (
        <b style={{ color: "red" }}>{status}</b>
      )}
    </>
  );
}

export const modelLabel = ['Active', 'Inactive']
