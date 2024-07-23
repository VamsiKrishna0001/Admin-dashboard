import axios from "axios";
import { BaseURL } from "constants/globals";


export const login = async (phoneNumber, password) => {
    try {
        const data = {
            "phoneNumber": phoneNumber,
            "password": password
        }
        const response = await axios.post(BaseURL +'/admin/sign_in', data);
        if (response.status === 200) {
            localStorage.setItem('admin_access_token', response?.data?.access_token);
        }
        return response.data;
    } catch (error) {

    }
}