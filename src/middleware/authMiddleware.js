
const jwt = require('jsonwebtoken');


function authenticate(req, res, next) {
 const secretKey = process.env.JWT_SECRET;
  const token = req.header('x-access-token');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).json({ message: 'Invalid token.' });
  }
}

module.exports = authenticate;
