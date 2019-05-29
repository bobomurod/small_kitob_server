const webToken = require("jsonwebtoken");

function checkTokenSetUser(req, res, next) {
  const authHeader = req.get("authorization");
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    console.log(token);
    if (token) {
      webToken.verify(token, "mysecret", (err, user) => {
        if(err){
          console.log(err);
        } else {
          console.log(user);
          req.user = user;
          next();
        }
      });
    } 
  } else {
    next();
  }
}

module.exports = {
  checkTokenSetUser
};
