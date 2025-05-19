import axios from "axios";

// Axios instance with base URL and headers
const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", // Django backend
  headers: {
    "Content-Type": "application/json",
    
    // Add Authorization or other headers if needed
  },
});

// The custom httpClient function
const httpClient = async (method, endpoint, data = null) => {
  try {
    let response;
    switch (method.toLowerCase()) {
      case "get":
        response = await axiosInstance.get(endpoint);
        break;
      case "post":
        response = await axiosInstance.post(endpoint, data);
        break;
      case "put":
        response = await axiosInstance.put(endpoint, data);
        break;
      case "patch":
        response = await axiosInstance.patch(endpoint, data);
        break;
      case "delete":
        response = await axiosInstance.delete(endpoint);
        break;
      default:
        throw new Error("Invalid HTTP method");
    }
    return response.data;
  } catch (error) {
    console.error(`Error during ${method} request to ${endpoint}:`, error);
    throw error;
  }
};

export default httpClient;
