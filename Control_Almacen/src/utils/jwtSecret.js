const jwt = require("jsonwebtoken");

const Hashear = (parametro, secreto) => {
  const response = jwt.sign(
    {
      data: parametro,
    },
    secreto,
    { expiresIn: "1h" }
  );
  return response;
};

const validarToken = (token, secreto) => {
  const response = jwt.verify(token, secreto);
  return response;
};

(module.exports = Hashear), validarToken;
