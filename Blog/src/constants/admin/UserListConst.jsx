import { banButton, editButton, upButton } from "../../components/common/CommonButton";

export const tableTitle = ["Username", "Email", "Date In", "Status", ""];
export const mangTitle = ["Username", "Email", "Status", "Role", ""];

export const tableBody = (fetchData, setAppearModel, setUserId) => {
  return fetchData.map((data) => ({
    name: data.username,
    email: data.email,
    date: data.date,
    status: <UserStatusColor status={data.status} />,
    role : data.role,
    ban: banButton({ id: data.id ,setAppearModel , setUserId}),
    up: upButton({ id: data.id ,setAppearModel, setUserId}),
  }));
};

import React from "react";

export default function UserStatusColor({ status }) {
  return (
    <>
      {status == "active" ? (
        <b style={{ color: "#2bf02b" }}>{status}</b>
      ) : (
        <b style={{ color: "red" }}>{status}</b>
      )}
    </>
  );
}

export const modelLabel = ['Active', 'Inactive']
