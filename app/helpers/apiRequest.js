import axios from 'axios';
import configs from '../config/index';

axios.interceptors.request.use((config) => {
  const newConfig = config;
  if (configs.token != null) {
    newConfig.headers.Authorization = configs.token;
  }

  return newConfig;
}, (err) => {
  return Promise.reject(err);
});

function ApiRequest() {}

ApiRequest.prototype = {
  get: (url) => {
    return axios.get(url);
  },
  post: (url, data) => {
    return axios({
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      url,
      data: JSON.stringify(data),
    });
  },
};
const apiRequest = new ApiRequest();

export default apiRequest;
