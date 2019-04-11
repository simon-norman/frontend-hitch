import Api from './api';

export default class ProjectApi extends Api {
  constructor({ apiProvider }: { apiProvider: any }) {
    super({ baseURL: 'http://localhost:3000', apiProvider })
  }

  createProject = async ({ project }:{ project:object }): Promise<void> => {
    try {
      await this.post('/project', project);
    } catch (error) {
      console.log(error);
    }
  }
}

