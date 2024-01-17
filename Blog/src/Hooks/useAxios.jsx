import axios from "axios";
import { Api } from "../constants/API";
import { useState } from "react";

export const useAxios = () => {
  const [loading, setLoading] = useState(false);

  const sendRequest = (endpoint, data) => {
    setLoading(true);

    return axios
      .post(`${Api}${endpoint}`, data)
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        throw err; 
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { sendRequest, loading };
};
