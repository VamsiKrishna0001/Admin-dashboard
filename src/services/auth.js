import axios from "axios";
import { showErrorToast } from "components/MDToast";
import { BaseURL } from "constants/globals";

export const login = async (phoneNumber, password) => {
  try {
    const data = {
      phoneNumber: phoneNumber,
      password: password,
    };
    const response = await axios.post(BaseURL + "/admin/sign_in", data);
    if (response.status === 200) {
      localStorage.setItem("admin_access_token", response?.data?.accessToken);
    }
    return response.data;
  } catch (error) {
    showErrorToast("Error in Logging in", true);
  }
};

export const logout = async () => {
  try {
    const access_token = localStorage.getItem("admin_access_token");
    const headers = {
      accessToken: access_token,
    };
    const response = await axios.post(
      BaseURL + "/logout", 
        {
        push_token: null,
      },
      {
        headers,
      }
    );
    if (response.status === 200) {
      localStorage.removeItem("admin_access_token");
    }
    return response.data;
  } catch (error) {
    showErrorToast("Error in Logging out", true);
  }
};
