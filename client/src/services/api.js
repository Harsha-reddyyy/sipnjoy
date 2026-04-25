import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const statusService = {
  getStatuses: async () => {
    const response = await api.get('/status');
    return response.data;
  },
  createStatus: async (clientName) => {
    const response = await api.post('/status', { client_name: clientName });
    return response.data;
  }
};

export default api;
