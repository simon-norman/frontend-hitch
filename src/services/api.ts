
export default class Api {
  api: any;
  get: any;
  post: any;

  constructor({ baseURL, apiProvider } : { baseURL: string, apiProvider: any }) {
    debugger;
    this.api = apiProvider.create({
      baseURL,
      responseType: 'json',
    });

    this.post = this.api.post;
  }
}

