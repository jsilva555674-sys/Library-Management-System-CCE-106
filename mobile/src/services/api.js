import axios from 'axios';

// NOTE: On the Android emulator, `localhost` refers to the emulator itself,
// not your dev machine — use 10.0.2.2 to reach a Laravel server running on
// your host machine. On iOS simulator, localhost works fine.
const BASE_URL = 'http://10.0.2.2:8000/api';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});

export const pingApi = async () => {
  const { data } = await api.get('/ping');
  return data;
};

export default api;
