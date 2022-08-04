const axios = require('axios');
class HttpService {
  get(endpoint,data = {},headers = null,serverReq = null,responseType = 'json') {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.request(
          headers,
          responseType
        ).get(endpoint);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  }

  request(headers = {}, responseType = 'json') {
    return axios.create({
      responseType: responseType,
      headers,
    });
  }
}

export default HttpService;
