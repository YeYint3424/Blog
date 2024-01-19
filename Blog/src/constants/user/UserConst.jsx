import { Link } from "react-router-dom";
import StatusColor from "../admin/DashboardConst";

export const blogTableTitle = ['Title', 'Date', 'Status']

export const tableBody = (fetchData) => {
    return fetchData.map((data) => ({
      title: data.title,
      date: data.date,
      status: <StatusColor status={data.status} />
    }));
  };
  
  export const userBlogTable = (data) => {
    const body = tableBody(data);
  
    return body.map((rowData, index) => (
      <tr key={index}>
        <td className="d-flex align-items-center">
          <Link className="text-decoration-underline" to={''}>{rowData.title}</Link>
        </td>
        <td>{rowData.date}</td>
        <td>{rowData.status}</td>
      </tr>
    ));
  };