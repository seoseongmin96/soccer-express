const { signup, userlist, profile } = require('../controllers/user.controller');
module.exports = x => {x.app.post(`${x.url}/sign-up`, signup)
x.app.get(`${x.url}/list`, userlist)
x.app.get(`${x.url}/profile/:id`, profile)};