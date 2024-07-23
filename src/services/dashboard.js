import axios from "axios";
// import { BaseURL } from "constants/globals";
const BaseURL = "http://localhost:8000";

export const Analytics = async (access_token) => {
  try {
    // const headers = {
    //     'accessToken': access_token
    // }
    const response = await axios.get(BaseURL + "/admin/all_analytics", {
      headers: {
        accessToken:
          "dc8217c38cdf56a4ef59a84dd1e106b63c545ce107dcb13f74a91c23bb23b6b4",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const UserGrowthGraph = async (access_token) => {
  try {
    // const headers = {
    //     'accessToken': access_token
    // }
    const response = await axios.get(BaseURL + "/admin/user_join_graph", {
      headers: {
        accessToken:
          "dc8217c38cdf56a4ef59a84dd1e106b63c545ce107dcb13f74a91c23bb23b6b4",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const UserAttributeGraph = async (access_token) => {
  try {
    // const headers = {
    //     'accessToken': access_token
    // }
    const response = await axios.get(BaseURL + "/admin/user_attributes", {
      headers: {
        accessToken:
          "dc8217c38cdf56a4ef59a84dd1e106b63c545ce107dcb13f74a91c23bb23b6b4",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const AllUsers = async (access_token) => {
  try {
    // const headers = {
    //     'accessToken': access_token
    // }
    const response = await axios.get(BaseURL + "/admin/all_users", {
      headers: {
        accessToken:
          "dc8217c38cdf56a4ef59a84dd1e106b63c545ce107dcb13f74a91c23bb23b6b4",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const UserAttributes = async (access_token) => {
  try {
    const headers = {
      "accessToken": access_token,
    };
    const response = await axios.get(
      BaseURL + "/admin/user_attributes",
      (headers = headers)
    );
  } catch (error) {
    throw error;
  }
};

export const InviteListUsers = async (access_token) => {
  try {
    const headers = {
      "accessToken": access_token,
    };
    const response = await axios.get(
      BaseURL + "/admin/invitelist_user",
      {headers: {
        accessToken:
          "dc8217c38cdf56a4ef59a84dd1e106b63c545ce107dcb13f74a91c23bb23b6b4",
      },}
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const MostInviteListUsers = async (access_token) => {
  try {
    const headers = {
      "accessToken": access_token,
    };
    const response = await axios.get(
      BaseURL + "/admin/most_invitelist_user",
      {headers: {
        accessToken:
          "dc8217c38cdf56a4ef59a84dd1e106b63c545ce107dcb13f74a91c23bb23b6b4",
      },}
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const SmsListUsers = async (pageIndex, pageSize) => {
  try {
    const access_token = localStorage.getItem('admin_access_token');
    const headers = {
      "accessToken": access_token,
    };
    const response = await axios.get(
      BaseURL + "/admin/sms_log",
      {params: {limit: pageSize,
        offset: pageIndex * pageSize,}
      ,headers: {
        accessToken:
          "dc8217c38cdf56a4ef59a84dd1e106b63c545ce107dcb13f74a91c23bb23b6b4",
      },}
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const ConfigurationsSettings = async (access_token) => {
  try {
    const headers = {
      "accessToken": access_token,
    };
    const response = await axios.get(
      BaseURL + "/admin/configurations_setting",
      {
        headers: {
          accessToken:
            "dc8217c38cdf56a4ef59a84dd1e106b63c545ce107dcb13f74a91c23bb23b6b4",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const Configurations = async (access_token, data) => {
  try {
    const headers = {
      "accessToken": access_token,
    };
    console.log("data", data);
    const response = await axios.post(
      BaseURL + "/admin/configurations",
      data,
      {
        headers
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};


export const BlockUser = async (access_token, data) => {
  try {
    const headers = {
      "accessToken": access_token,
    };
    const response = await axios.post(
      BaseURL + "/admin/block",
      data,
      {headers}
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const SendNotification = async (access_token, data) => {
  try {
    const headers = {
      "accessToken": access_token,
    };
    const response = await axios.post(
      BaseURL + "/admin/send_notification",
      data,
      {headers}
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

