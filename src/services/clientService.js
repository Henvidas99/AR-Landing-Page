import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const sendMessage = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/Client/contact`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    handleUserError(error);
    return undefined;
  }
};

const handleUserError = (error) => {
  if (error.response) {
    throw new Error(error.response.data || error.message);
  } else {
    throw new Error(error);
  }
};
