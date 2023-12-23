// middleware.js

const authenticate = (req, res, next) => {
  const { username, password } = req.headers;

  // Replace this with a proper authentication mechanism
  if (username === 'user' && password === 'password') {
    next(); // User is authenticated, continue to the next middleware or route
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = {
  authenticate,
};
