import axios from 'axios';

const URL = 'https://restcountries.eu/rest/v2';

const client = axios.create({
  baseURL: URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export default {
  async execute(method, resource, data) {
    // inject the accessToken for each request
    return client({
      method,
      url: URL + resource,
      data,
    }).then((req) => req.data);
  },

  get(endpoint) {
    return this.execute('get', endpoint);
  },

  /* getPost(id) {
    return this.execute('get', `/posts/${id}`);
  },
  createPost(data) {
    return this.execute('post', '/posts', data);
  },
  updatePost(id, data) {
    return this.execute('put', `/posts/${id}`, data);
  },
  deletePost(id) {
    return this.execute('delete', `/posts/${id}`);
  }, */
};
