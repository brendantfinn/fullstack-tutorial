const { RESTDataSource } = require('apollo-datasource-rest');
//partial query caching: RESTDataSource class automatically caches responses from REST resources with no additional setup.
class LaunchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v2/';
  }
}

module.exports = LaunchAPI;