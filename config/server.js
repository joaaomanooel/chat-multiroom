import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';

import chatRoutes from '../src/chat/chat.routes';
import homeRoutes from '../src/home/home.routes';

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('./src/assets'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

homeRoutes(app);
chatRoutes(app);

export default app;
