import axios from "axios";
import { baseUrl } from "../../urls";

const VarifyOtpUrl = `${baseUrl}/authentication/verify-email-otp/`;


const VarifyOtp = async (email, otp) => {
    try{
        const response = await axios.post(VarifyOtpUrl, {email, otp});
    
        if (response.status === 202){
            console.log("OTP Varification Successfull")
            return {'status': true, response: response.data}
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
}