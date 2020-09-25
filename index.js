const express       = require('express');
const swaggerUi     = require('swagger-ui-express');
const documentation = require('./documentation/index.json');
const env           = require('./controllers/env')();
const examRoutes    = require('./routers/exams');
const questionRoutes= require('./routers/questions');
const studentRoutes = require('./routers/students');
const lecturerRoutes = require('./routers/lecturers');

const app = express(),
PORT      = process.env.PORT, 
IP        = process.env.IP;
require('./controllers/tables')();

app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('/doc');
});
app.use('/doc', swaggerUi.serve, swaggerUi.setup(documentation));
app.use('/exams', examRoutes);
app.use('/exams/:examId', questionRoutes);
app.use('/exams/:examId', studentRoutes);
app.use('/exams/:examId', lecturerRoutes);

app.listen(PORT, IP, () => {
    console.log(env);
    console.log(`API running on http://${IP}:${PORT}`);
}); 