const expres = require('express');
const cors = require('cors');
const app = expres();

//setting
app.set('port', process.env.PORT || 4000);

//midlewares
app.use(cors());
app.use(expres.json());

//routes
app.use('/api/users' , require('../src/routes/users'));
app.use('/api/notes' , require('../src/routes/notes'));

module.exports = app;