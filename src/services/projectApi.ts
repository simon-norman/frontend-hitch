import Api from './api';

class ProjectApi extends Api {
  constructor() {
    super({ baseURL: 'http://localhost:3000' })
  }

  createProject = async ({ project }:{ project:object }): Promise<void> => {
    try {
      await this.post('/project', project);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ProjectApi();

