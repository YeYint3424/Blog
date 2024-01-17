import { BsBell } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="border-bottom w-100 m-0">
      <div className="d-flex aligh-align-items-center justify-content-between py-4 px-5 m-0">
        <h2>DashBoard</h2>
        <div
          style={{
            border: "1px solid #000",
            borderRadius: "4px",
            width: "2rem",  
            height: "2rem", 
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BsBell size={20} color="#000" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
