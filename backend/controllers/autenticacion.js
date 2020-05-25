
//Importar servicio de postgres
const ServicioPg = require("../services/postgres");

// Importar jwt
const jwt = require("jsonwebtoken");
const SECRET_KEY =
  "68ce89b6fd30da346cecc7812eb66b121623d4971cffeaf528c6a691e4d5e4593b711138c3717e6cbbf5b4a93a2f79097c5eef39a9e2aca2621f19b4b5255dc1";

/**
 * Realizar autenticación de persona en el sistema
 * @param {*} usuario Json del usuario
 */
let validarLogin = (usuario) => {
    if (!usuario) {
      throw {
        ok: false,
        mensaje: "La información del usuario es obligatoria.",
      };
    }
  
    if (!usuario.documento) {
      throw { ok: false, mensaje: "El documento del usuario es obligatorio."};
    }
    if (!usuario.clave) {
      throw { ok: false, mensaje: "La clave del usuario es obligatoria."};
    }
  };

  /**
 * Consultar la persona en el sistema con documento y clave
 * @param {*} usuario
 */
let consultarUsuario = async (usuario) => {
    let _servicio = new ServicioPg();
    let sql = `SELECT * FROM public.usuarios WHERE documento='${usuario.documento}' AND clave=md5('${usuario.clave}')`;
    let valores = [usuario.documento, usuario.clave];
    let respuesta = await _servicio.ejecutarSql(sql, valores);
    console.log(sql);
    return respuesta;
  };

  let generarToken = (usuario) => {
    delete usuario.clave;
    let token = jwt.sign(usuario, SECRET_KEY, { expiresIn: "5h" });  
    return token;
  };

  let verificarToken = (token) => {
    return jwt.verify(token, SECRET_KEY);
  };
  

  let verificarUsuario = (req, res) => {
    try {
        let tipo = req.query
        console.log(tipo['tipo'])
        let token = req.headers.token;
        let autenticacion = new _Autenticacion(req.body, tipo['tipo']);
        let verificacion = autenticacion.verificarToken(token);
        res.status(200).send({
            ok: true,
            info: token,
            mensaje: "Autenticado.",
        });
    } catch (error) {
        res.status(401).send({
            ok: false,
            info: error,
            mensaje: "No autenticado.",
        });
    }
  }

  module.exports = {
    validarLogin,
    consultarUsuario,
    generarToken,
    verificarToken,
    verificarUsuario,
  };