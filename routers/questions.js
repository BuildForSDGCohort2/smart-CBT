const { Router } = require('express'),
router           = Router({mergeParams: true}),
controller       = require('../controllers/question');

router.get('/questions', (req, res) => {
    controller.readQuestions(req, res);
});

router.post('/questions', (req, res) => {
    controller.createQuestion(req, res);
});

router.delete('/questions', (req, res) => {
    controller.deleteQuestions(req, res);
});

router.get('/questions/:id', (req, res) => {
    controller.readQuestion(req, res);
});

router.put('/questions/:id', (req, res) => {
    controller.updateQuestion(req, res);
});

router.delete('/questions/:id', (req, res) => {
    controller.deleteQuestion(req, res);
});

router.post('/questions/batch', (req, res) => {
    controller.createQuestions(req, res);
});

module.exports = router;