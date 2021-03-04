const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const postController = require('./controllers/postController');
const commentController = require('./controllers/commentController');
const indexController = require('./controllers/indexController');
const morgan = require('morgan');
require('./models/User');


const app = express();
const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(`${__dirname}/public`));
app.use('/everdecision', indexController, postController, commentController);
app.use(morgan('tiny'))



app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
});