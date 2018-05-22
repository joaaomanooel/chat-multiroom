import homeController from './home.controller';

const homeRoutes = (app) => {
  app.get('/', (req, res) => {
    homeController(req, res);
  });
};

export default homeRoutes;
