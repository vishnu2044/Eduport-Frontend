import axios from "axios";
import { baseUrl } from "../../urls";
import { SuccessAlert } from "../../../components/alertMessages/SuccessAlert";
import { ErrorMessage } from "../../../components/alertMessages/ErrorAlert";

const loginUrl = `${baseUrl}/authentication/user-login/`;


export const loginApi = async (username, password) => {
    try {
        const response = await axios.post(loginUrl, { username, password });

        if (response.status === 200) {
            console.log("user success")
            return {'status': true, response : response.data}

        } 
    } catch (error) {
        
        if (error.response) {
            console.log("API error response:", error.response.data);
            return { 'status':false,  message: error.response.data.message }
            // ErrorMessage({ message: error.response.data.message });
        } else {
            
            console.log("Network error:", error.message);
            return { 'status':false,  message: error.message }
            // ErrorMessage({ message: "Network error. Please check your internet connection." });

        }
        return error.response?.data || { message: "An error occurred" };
    }
};
