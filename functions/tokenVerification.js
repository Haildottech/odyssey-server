const jwt = require('jsonwebtoken');

function verify(req, res, next) {
  const token = req.headers["x-access-token"]?.split('Split')[1]
  if(token) {
    jwt.verify(token,'qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm', (err, decode) =>{
      if(err) return res.json({
        isLoggedIn:false,
        message:"Failed To Authenticate"
      })
      req.user={};
      req.user.id = decode.id;
      req.user.username = decode.username;
      next();
    })
  } else {
    res.json({message:"Incorrect Token Given", isLoggedIn:false});
  }
}

module.exports = verify;