import axios from 'axios';

export default class Api {
  api: any;
  get: any;
  post: any;

  constructor({ baseURL } : { baseURL: string }) {
    this.api = axios.create({
      baseURL,
      responseType: 'json',
    });

    this.get = this.api.get;

    this.post = this.api.get;
  }
}

