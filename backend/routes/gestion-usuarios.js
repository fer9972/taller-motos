const express = require("express");
const router = express.Router();

const _controlador = require("../controllers/gestion-usuarios");

/**
 * Obteniendo los usuarios
 */
router.get("/usuario", (req, res) => {
    _controlador.consultarUsuarios().then(respuestaDB => {
        let registros = respuestaDB.rows;
        res.send({ ok: true, info: registros, mensaje: "usuarios consultados" });
      }).catch(error => {
        res.send(error);
        console.log("error" + res);
      });
});


/**
 * Guardando un usuario
 */
router.post("/usuario", (req, res) => {
    try {
      //Capturar el body desde la solicitud
      let usuario = req.body;
  
      // Valida la información, sino se envia al catch
      //_controlador.validarPublicacion(info_publicacion);
  
      // Guardar la moto en base de datos
      _controlador.guardarUsuario(usuario).then(respuestaDB => {
        res.send({ ok: true, mensaje: "usuario guardado", info: usuario});
      }).catch(error => {
        res.send(error);
      });
  
      // Responder
    } catch (error) {
      res.send(error);
    }
});

/**
 * Modificar una publicacion
 */
router.put("/usuario/:documento", (req, res) => {
  // Capturar el parámetro de la ruta
  let documento = req.params.documento.toString();
  console.log("Error" + documento)
  let usuario = req.body;
  console.log(usuario);
  _controlador
    .modificarUsuario(usuario, documento)
    .then((respuestaDB) => {
      res.send({ ok: true, mensaje: "El usuario ha sido modificada", info: respuestaDB });
      console.log()
    })
    .catch((error) => {
      res.send(error);
      console.log("Error" + error.res)
    });
});

  /**
 * Eliminar un usuario
 */
router.delete("/usuario/:documento", (req, res) => {
    let documento = req.params.documento;
    console.log(documento);
    _controlador
      .eliminarUsuario(documento)
      .then((respuestaDB) => {
        res.send({ ok: true, info: {}, mensaje: "Usuario eliminado correctamente" });
      })
      .catch((error) => {
        res.send("no se pudo eliminar "+ error);
      });
  });


  module.exports = router;
