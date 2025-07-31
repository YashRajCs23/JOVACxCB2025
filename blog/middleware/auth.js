const requireAuth = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/auth/login');
  }
  next();
};

const requireGuest = (req, res, next) => {
  if (req.session.user) {
    return res.redirect('/');
  }
  next();
};

module.exports = { requireAuth, requireGuest };