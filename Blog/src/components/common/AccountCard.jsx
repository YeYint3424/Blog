import { Card } from "react-bootstrap";

const AccountCard = () => {
  return (
    <Card className="p-1 position-absolute acc-card w-95">
      <div className="d-flex align-items-center justify-content-evenly ">
        <img
          src="https://i.imgflip.com/73u9iv.jpg"
          alt="account photo"
          width={50}
          height={50}
          className="rounded"
        />
        <div className="mt-3">
          <b>AccName</b>
          <p>Admin</p>
        </div>
      </div>
    </Card>
  );
};

export default AccountCard;
