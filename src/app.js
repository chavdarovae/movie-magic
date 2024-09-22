import express from 'express';
import handlebars from 'express-handlebars';

import routes from './routes.js';


const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

// sets view engine and extentions
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(express.urlencoded({extended: false}));
// sets up static files dir
app.use(express.static('public'));

// routes as middleware
app.use(routes);

app.listen(5100, () => console.log('Server is listening on http://localhost:5100'));