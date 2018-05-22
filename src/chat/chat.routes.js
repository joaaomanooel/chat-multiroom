import chatController from './chat.controller';

const chatRoute = (app) => {
  app.get('/chat', (req, res) => {
    chatController(app, req, res);
  });

  app.post('/chat', (req, res) => {
    chatController(app, req, res);
  });
};

export default chatRoute;
