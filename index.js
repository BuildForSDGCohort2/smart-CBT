const express       = require('express');
const swaggerUi     = require('swagger-ui-express');
const documentation = require('./documentation/index.json');
const env           = require('./controllers/env')();
const examRoutes    = require('./routers/exams');
const questionRoutes= require('./routers/questions');
const studentRoutes = require('./routers/students');
const lecturerRoutes = require('./routers/lecturers');
const resultRoutes   = require('./routers/results');

const app = express(),
PORT      = process.env.PORT, 
IP        = process.env.IP;
require('./controllers/tables')();

app.use(express.json());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.get('/', (req, res) => {
    res.redirect('/doc');
});
app.use('/doc', swaggerUi.serve, swaggerUi.setup(documentation));
app.use('/exams', examRoutes);
app.use('/exams/:examId', questionRoutes);
app.use('/exams/:examId', studentRoutes);
app.use('/exams/:examId', lecturerRoutes);
app.use('/exams/:examId', resultRoutes);

app.listen(PORT, IP, () => {
    console.log(env);
    console.log(`API running on http://${IP}:${PORT}`);
}); 