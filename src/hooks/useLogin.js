import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogin = () => {
  const { setAuth } = useAuth();
  const { navigate } = useNavigate();

  const loginUser = useCallback(
    async (credentials, cb) => {
      try {
        setAuth((prev) => ({ ...prev, loading: true }));
        const res = await axios.post(
          "https://run.mocky.io/v3/770ef57c-d24a-41c2-88c5-3fa7951514b1",
          credentials
        );
        setAuth((prev) => ({
          ...prev,
          isAuthenticated: true,
          accessToken: res.data.accessToken,
          user: res.data.user,
          loading: false,
        }));
        cb(null, res);
      } catch (error) {
        console.log(error);
        setAuth((prev) => ({
          ...prev,
          isAuthenticated: false,
          accessToken: "",
          user: null,
          loading: false,
          error: error.response.message,
        }));
        cb(error, null);
      }
    },
    [axios, setAuth]
  );
  const logoutUser = useCallback(async () => {
    setAuth((prev) => ({
      ...prev,
      isAuthenticated: false,
      accessToken: "",
      user: null,
      loading: false,
      error: null,
    }));
    navigate("/");
  }, [setAuth]);

  return {
    loginUser,
    logoutUser,
  };
};

export default useLogin;
