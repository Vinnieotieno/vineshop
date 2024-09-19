import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API_URL = `${BACKEND_URL}/api/users`;
// Register user
const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error; // Rethrow the error to be handled by the caller
    }
};



const authService = {
    register
};

export default authService;
