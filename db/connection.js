const monk = require('monk');

// const db = monk('localhost/auth-for-noobs');
const db = monk("localhost/kitob_auth");



module.exports = db;