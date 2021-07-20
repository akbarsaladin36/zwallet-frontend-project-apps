import axios from "../../utils/axios";

export const updateProfileData = (form) => {
  return {
    type: "UPDATE_PROFILE",
    payload: axios.axiosApiIntances.patch(`users/update-profile`, form),
  };
};
