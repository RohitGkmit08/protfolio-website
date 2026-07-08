function mongoSanitize() {
  return (req, res, next) => {
    const sanitize = (obj) => {
      if (obj && typeof obj === 'object') {
        Object.keys(obj).forEach((key) => {
          if (key.startsWith('$') || key.includes('.')) {
            delete obj[key];
          } else {
            sanitize(obj[key]);
          }
        });
      }
    };
    if (req && req.body) sanitize(req.body);
    if (req && req.params) sanitize(req.params);
    next();
  };
}

module.exports = mongoSanitize;
