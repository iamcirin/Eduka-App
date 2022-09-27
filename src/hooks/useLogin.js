import React from "react";
import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogin = () => {
  const { setAuth } = useAuth();

  const loginUser = async (credentials, cb) => {
    setAuth((prev) => ({ ...prev, loading: true }));
    try {
      const res = await axios.post("/api/login", credentials);
      setAuth((prev) => ({
        ...prev,
        isAuthenticed: true,
        accessToken: res.data.accessToken,
        user: res.data.user,
        loading: false,
      }));
      cb(null, res);
    } catch (error) {
      console.log(error);
      setAuth((prev) => ({
        ...prev,
        isAuthenticed: false,
        accessToken: "",
        user: null,
        loading: false,
        error: error.response.message,
      }));
      cb(error, null);
    }
  };

  return {
    loginUser,
  };
};

export default useLogin;
