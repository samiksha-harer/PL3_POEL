const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const token = req.headers['x-access-token'];

  if (!token) return res.status(403).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    req.userId = decoded.id;
    next();
  });
}

module.exports = verifyToken;