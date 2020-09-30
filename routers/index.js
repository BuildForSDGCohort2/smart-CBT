const { Router } = require("express"),
router           = Router(),
controller       = require('../controllers');

router.post('/student/login', (req, res) => {
    controller.logStudentIn(req, res);
});

module.exports = router;