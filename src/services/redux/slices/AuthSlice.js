import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi } from "../../api/authentication/LoginApi";
import { ErrorMessage } from "../../../components/alertMessages/ErrorAlert";
import { SuccessAlert } from "../../../components/alertMessages/SuccessAlert";
import { useNavigate } from "react-router-dom";

const initialState = {
  isAuthenticated: false,
  user: null,
  accessToken: null,
  refreshToken: null,
  loading: false,
  error: null,
};



export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password, navigate }, { rejectWithValue }) => {
    
    try {
      console.log('User login is working');
      const userData = await loginApi(username, password);

      // Check if the response contains user data
      if (userData && userData.response) {
        console.log("Login successful, processing user data");

        const user = userData.response;
        
        // Storing user data in local storage
        if (user.user_profile.user_type === 'Instructor'){
          navigate('/instructor-panel')
        }else if (user.user_profile.user_type === 'Student'){
          navigate('/student-panel')
        }
        localStorage.setItem('userType', user.user_profile.user_type);
        localStorage.setItem('accessToken', user.access);
        localStorage.setItem('refreshToken', user.refresh);

        SuccessAlert({ message: "User login successful!" });
        return user;  // Return user data for further processing in the slice
      } else {
        console.log("Status is false or response is not as expected from slice");
        ErrorMessage({ message: userData.message || 'Login failed' });
        return rejectWithValue(userData.message || 'Login failed');
      }

    } catch (error) {
      console.log("Error occurred:", error);
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;

      // Clear localStorage
      localStorage.removeItem('user');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.user = null;
        state.accessToken = null;
        state.refreshToken = null;
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

