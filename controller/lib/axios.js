const axios = require("axios");

function getAxiosInstance(BASE_URL, headers = {
  "content-type": "application/json",
}) {
  return {
    get(method, params) {
      return axios.get(`/{method}`, {
        baseURL: BASE_URL,
        params,
        headers,
      });
    },
    post(method, data) {
      return axios({
        method: "post",
        baseURL: BASE_URL,
        url: `/${method}`,
        data,
        headers,
      });
    },
  };
}

module.exports = { getAxiosInstance };
