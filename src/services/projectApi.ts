interface projectApi {
  createProject(params: object): Promise<void>;
}

const newProjectApi = ({ apiProvider }: { apiProvider: any }): projectApi => {
  const baseApi = apiProvider.create({
    baseURL: 'http://localhost:3000',
    responseType: 'json',
  });

  return {
    createProject: async (project: object): Promise<void> => {
      try {
        await baseApi.post('/project', project);
      } catch (error) {
        console.log(error);
      }
    }
  };
}

export default newProjectApi;
