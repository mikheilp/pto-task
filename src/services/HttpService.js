const axios = require('axios');
const API_URL = 'https://api2.myauto.ge/';
class HttpService {
  get(
    endpoint,
    data = {},
    headers = null,
    serverReq = null,
    responseType = 'json'
  ) {
    const dataMerged = {
      ...data,
    };
    const params = this.getQueryString(dataMerged);
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.request(
          headers,
          serverReq,
          responseType
        ).get(endpoint + (params ? `?${params}` : ''));
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  }

  getQueryString(params = {}) {
    return Object.keys(params)
      .map((k) => {
        let url = `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`;
        if (Array.isArray(params[k])) {
          url = params[k]
            .map((item, index) => `${k}[${index}]=${encodeURIComponent(item)}`)
            .join('&');
        }
        return url;
      })
      .join('&');
  }

  request(headers = {}, responseType = 'json') {
    return axios.create({
      baseURL: API_URL,
      responseType: responseType,
      headers,
    });
  }
}

export default HttpService;
