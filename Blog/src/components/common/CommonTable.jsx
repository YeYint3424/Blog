import { Table } from "react-bootstrap";

const CommonTable = ({ titles, bodyData }) => {
  return (
    <Table title="Blog Status">
      <thead>
        <tr>
          {titles.map((title,index) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>{bodyData}</tbody>
    </Table>
  );
};

export default CommonTable;
