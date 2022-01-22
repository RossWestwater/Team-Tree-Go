const express = require('express');
const router = express.Router();

router.use(require('./departmentAPI'));
// router.use(require('./employeeAPI'));
// router.use(require('./roleAPI'));

module.exports = router;