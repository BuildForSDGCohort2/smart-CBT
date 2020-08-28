const express       = require('express');
const swaggerUi     = require('swagger-ui-express');
const documentation = require('./documentation/index.json');
const env           = require('./controllers/env')();

const app = express(),
PORT      = process.env.PORT, 
IP        = process.env.IP;

app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('/doc');
});
app.use('/doc', swaggerUi.serve, swaggerUi.setup(documentation));

app.listen(3000, () => {
    console.log(env);
    console.log(`API running on http://${IP}:${PORT}`);
}); 