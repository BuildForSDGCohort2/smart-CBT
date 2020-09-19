const { Router } = require('express'),
router           = Router({mergeParams: true}),
controller       = require('../controllers/student');

router.get('/students', (req, res) => {
    controller.readStudents(req, res);
});

router.post('/students', (req, res) => {
    controller.createStudent(req, res);
});

router.delete('/students', (req, res) => {
    controller.deleteStudents(req, res);
});

router.get('/students/:id', (req, res) => {
    controller.readStudent(req, res);
});

router.put('/students/:id', (req, res) => {
    controller.updateStudent(req, res);
});

router.delete('/students/:id', (req, res) => {
    controller.deleteStudent(req, res);
});

router.post('/students/batch', (req, res) => {
    controller.createStudents(req, res);
});

module.exports = router;