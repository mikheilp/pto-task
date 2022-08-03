import HttpService from './HttpService';

class MainService extends HttpService {
  getMans() {
    return this.get('http://static.my.ge/myauto/js/mans.json', null);
  }

  getManModels() {
    return this.get('/ka/getManModels');
  }

  getCats() {
    return this.get('/ka/cats/get');
  }

  getProducts(data) {
    return this.get('/ka/products', data);
  }
}

export default new MainService();
