const { Router } = require('express'),
router           = Router({mergeParams: true}),
controller       = require('../controllers/lecturer.js');

router.get('/lecturers', (req, res) => {
    controller.readLecturers(req, res);
});

router.post('/lecturers', (req, res) => {
    controller.createLecturer(req, res);
});

router.get('/lecturers/:id', (req, res) => {
    controller.readLecturer(req, res);
});

router.put('/lecturers/:id', (req, res) => {
    controller.updateLecturer(req, res);
});

router.delete('/lecturers/:id', (req, res) => {
    controller.deleteLecturer(req, res);
});

module.exports = router;