import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;  // Load backend URL from environment variable
export const API_URL = `${BACKEND_URL}/api/users`;  // Set the API endpoint

// Register user function
const register = async (userData) => {
  try {
    // Send a POST request to register the user, with credentials (e.g., cookies)
    const response = await axios.post(`${API_URL}/register`, userData, {
      withCredentials: true,
    });
    return response.data;  // Return the response data on success
  } catch (error) {
    console.error("Error registering user:", error);  // Log the error for debugging
    throw error;  // Rethrow the error to be handled by the caller
  }
};

// Export the auth service
const authService = { register };
export default authService;
