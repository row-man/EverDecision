const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const postController = require('./controllers/postController');
const indexController = require('./controllers/indexController');
require('./models/User');


const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(`${__dirname}/public`));
app.use('/everdecision', indexController, postController);
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));



app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
});