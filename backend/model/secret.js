const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  return jwt.sign({ROM}, "f14b9534c96fc4d9a148e7b394b63e80", {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
