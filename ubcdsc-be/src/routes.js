const Router = require('express-promise-router');
const getEventsController = require('./controllers/getEventsController');

const router = Router();

router.get('/events', getEventsController);

module.exports = router;
