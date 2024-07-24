import axios from "axios";
// import { BaseURL } from "constants/globals";
const BaseURL = "http://localhost:8000";

export const Analytics = async () => {
  try {
    const access_token = localStorage.getItem("admin_access_token");
    const headers = {
        'accessToken': access_token
    }
    const response = await axios.get(BaseURL + "/admin/all_analytics", {
      headers
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const UserGrowthGraph = async () => {
  try {
    const access_token = localStorage.getItem("admin_access_token");
    const headers = {
        'accessToken': access_token
    }
    const response = await axios.get(BaseURL + "/admin/user_join_graph", {
      headers
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const UserAttributeGraph = async () => {
  try {
    const access_token = localStorage.getItem("admin_access_token");
    const headers = {
        'accessToken': access_token
    }
    const response = await axios.get(BaseURL + "/admin/user_attributes", {
      headers,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const AllUsers = async (pageIndex, pageSize) => {
  try {
    const access_token = localStorage.getItem("admin_access_token")
    const headers = {
        'accessToken': access_token
    }
    const response = await axios.get(BaseURL + "/admin/all_users", {
      params: { limit: pageSize, offset: pageIndex * pageSize },
      headers,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const InviteListUsers = async (pageIndex, pageSize)  => {
  try {
    const access_token = localStorage.getItem("admin_access_token");
    const headers = {
      accessToken: access_token,
    };
    const response = await axios.get(BaseURL + "/admin/invitelist_user", {
      params: { limit: pageSize, offset: pageIndex * pageSize },
      headers
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const SearchInInviteListUsers = async (pageIndex, pageSize, search) => {
  try {
    const access_token = localStorage.getItem("admin_access_token");
    const headers = {
      accessToken: access_token,
    };
    const response = await axios.post(
      BaseURL + "/admin/search_invite_user",
      { "search_name": search },
      { params: { limit: pageSize, offset: pageIndex * pageSize }, headers }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const MostInviteListUsers = async (access_token) => {
  try {
    const access_token = localStorage.getItem("admin_access_token");
    const headers = {
      accessToken: access_token,
    };
    const response = await axios.get(BaseURL + "/admin/most_invitelist_user", {
      headers
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const SmsListUsers = async (pageIndex, pageSize) => {
  try {
    const access_token = localStorage.getItem("admin_access_token");
    const headers = {
      accessToken: access_token,
    };
    const response = await axios.get(BaseURL + "/admin/sms_log", {
      params: { limit: pageSize, offset: pageIndex * pageSize },
      headers,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const SearchInSmstUsers = async (pageIndex, pageSize, search) => {
  try {
    const access_token = localStorage.getItem("admin_access_token");
    const headers = {
      accessToken: access_token,
    };
    const response = await axios.post(
      BaseURL + "/admin/search_sms_log",
      { search_name: search },
      {
        params: { limit: pageSize, offset: pageIndex * pageSize },
        headers,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const SearchInUsers = async (pageIndex, pageSize, search) => {
  try {
    const access_token = localStorage.getItem("admin_access_token");
    const headers = {
      accessToken: access_token,
    };
    const response = await axios.post(
      BaseURL + "/admin/search_all_users",
      { search_name: search },
      {
        params: { limit: pageSize, offset: pageIndex * pageSize },
        headers,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const ConfigurationsSettings = async () => {
  try {
    const access_token = localStorage.getItem("admin_access_token");
    const headers = {
      accessToken: access_token,
    };
    const response = await axios.get(
      BaseURL + "/admin/configurations_setting",
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const Configurations = async (data) => {
  try {
    const access_token = localStorage.getItem("admin_access_token");
    const headers = {
      accessToken: access_token,
    };
    const response = await axios.post(BaseURL + "/admin/configurations", data, {
      headers,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const BlockUser = async (data) => {
  try {
    const access_token = localStorage.getItem("admin_access_token");
    const headers = {
      accessToken: access_token,
    };
    const response = await axios.post(BaseURL + "/admin/block", data, {
      headers,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const SendNotification = async ( data) => {
  try {
    const access_token = localStorage.getItem("admin_access_token");
    const headers = {
      accessToken: access_token,
    };
    const response = await axios.post(
      BaseURL + "/admin/send_notification",
      data,
      { headers }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
