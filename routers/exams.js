const { Router } = require('express'),
router           = Router(),
controller       = require('../controllers/exam');

router.get('/', (req, res) => {
    controller.getExams(req, res);
});

module.exports = router;