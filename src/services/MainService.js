import HttpService from './HttpService';

class MainService extends HttpService {
  getData(data) {
    return this.get('https://dummyjson.com/products', data);
  }
}

export default new MainService();
