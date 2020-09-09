const { Router } = require('express'),
router           = Router(),
controller       = require('../controllers/exam');

router.get('/', (req, res) => {
    controller.readExams(req, res);
});

router.get('/:id', (req, res) => {
    controller.readExam(req, res);
});

router.post('/', (req, res) => {
    controller.createExam(req, res);
});

router.put('/:id', (req, res) => {
    controller.updateExam(req, res);
});

router.delete('/:id', (req, res) => {
    controller.deleteExam(req, res);
});

router.delete('/', (req, res) => {
    controller.deleteExams(req, res);
});

module.exports = router;