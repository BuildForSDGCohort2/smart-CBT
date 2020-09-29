const { Router } = require('express'),
router           = Router({mergeParams: true}),
controller       = require('../controllers/result');

router.get('/results', (req, res) => {
    controller.readResults(req, res);
});

router.post('/results', (req, res) => {
    controller.createResult(req, res);
});

router.get('/results/:id', (req, res) => {
    controller.readResult(req, res);
});

module.exports = router;