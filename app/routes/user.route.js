const { signup, userlist } = require('../controllers/user.controller');
module.exports = x => x.app.post(`${x.url}/sign-up`, signup);
module.exports = x => x.app.get(`${x.url}/list`, userlist) ;