import axios from "axios";
import { Api } from "../constants/API";
import { useState } from "react";

export const useAxios = () => {
  const [loading, setLoading] = useState(false);

  const postRequest = (endpoint, data) => {
    setLoading(true);

    return axios
      .post(`${Api}${endpoint}`, data)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err; 
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const getRequest = (endpoint) => {
    setLoading(true);

    return axios
      .get(`${Api}${endpoint}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err; 
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { postRequest, loading, getRequest };
};
