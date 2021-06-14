import axios from "../../utils/axios";

export const getBalanceData = (token, data) => {
  axios.setToken(token);
  return {
    type: "GET_BALANCE_DATA",
    payload: axios.axiosApiIntances.get(`transaction/balance`, data),
  };
};

export const getUsersByIdData = (token, id) => {
  axios.setToken(token);
  return {
    type: "GET_USERS_ID",
    payload: axios.axiosApiIntances.get(`users/${id}`),
  };
};
