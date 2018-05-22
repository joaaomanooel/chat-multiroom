const chatController = (app, req, res) => {
  const formData = req.body;

  req.assert('userName', 'Nome ou apelido é obrigatório').notEmpty();
  req.assert('userName', 'Nome ou apelido deve conter entre 3 e 15 caracteres').len(3, 15);

  const errors = req.validationErrors();

  if (errors) {
    return res.render('index', { validation: errors });
  }

  app.get('io').emit(
    'msgParaClientes',
    {
      userName: formData.userName,
      msg: ' acabou de entrar no chat',
    }
  );

  return res.render('chat', { dataForm: formData });
};

export default chatController;
