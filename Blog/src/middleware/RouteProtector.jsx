import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export default function RouteProtector({role}) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user || (user.role !== "admin" && role === 'admin')) {
      toast.error("You are not authenticated as an admin");
      navigate("/auth/login");
    }
  }, [user, navigate, role]);
  

  return <Outlet />;
}
