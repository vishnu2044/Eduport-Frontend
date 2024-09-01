import axios from "axios";
import { baseUrl } from "../../urls";

const signupUrl = `${baseUrl}/authentication/user-signup/`


export const signupApi = async (signupData) => {
    console.log("form data : from signup api page :::::::", signupData)
  try {
    const response = await axios.post(signupUrl, signupData);
    console.log("signup response from signup api :::::", response)
    console.log("signup response from signup api :::::", response)
    console.log("signup response from signup api :::::", response)
    console.log("signup response from signup api :::::", response)

    if (response.status === 201) {
      console.log('User signup success');
      return { 'status': true, response: response.data };
    }
  } catch (error) {
    if (error.response) {
      console.log('API error response:', error.response.data);
      return { 'status': false, message: error.response.data.message };
    } else {
      console.log('Network error:', error.message);
      return { 'status': false, message: error.message };
    }
  }
};
