const express = require("express");
const router = express.Router();

const _controlador = require("../controllers/gestion-mantenimiento");

/**
 * Obteniendo los mantenimientos
 */
router.get("/mantenimiento", (req, res) => {
    _controlador.consultarMantenimientos().then(respuestaDB => {
        let registros = respuestaDB.rows;
        res.send({ ok: true, info: registros, mensaje: "Mantenimientos consultados" });
      }).catch(error => {
        res.send(error);
      });
});

/**
 * Guardando un mantenimiento
 */
router.post("/mantenimiento", (req, res) => {
    try {
      //Capturar el body desde la solicitud
      let mantenimiento = req.body;
  
      // Valida la información, sino se envia al catch
      //_controlador.validarPublicacion(info_publicacion);
  
      // Guardar la moto en base de datos
      _controlador.guardarMantenimiento(mantenimiento).then(respuestaDB => {
        res.send({ ok: true, mensaje: "Mantenimiento guardado", info: moto});
      }).catch(error => {
        res.send(error);
      });
  
      // Responder
    } catch (error) {
      res.send(error);
    }
});

  /**
 * Modificar una mantenimiento
 */
router.put("/mantenimiento/:placa", (req, res) => {
    // Capturar el parámetro de la ruta
    let placa = req.params.placa;
  
    let mantenimiento = req.body;
    console.log(this.mantenimiento);
    _controlador
      .modificarMantenimiento(mantenimiento, placa)
      .then((respuestaDB) => {
        res.send({ ok: true, mensaje: "el mantenimiento ha sido modificado", info: respuestaDB});
      })
      .catch((error) => {
        res.send("error " + error);
      });
  });

  /**
 * Obtener mantenimientos de un mecanico
 */
router.get("/mantenimiento/:id_mecanico", (req, res) => {
    let id_mecanico = req.params.id_mecanico;
    console.log(id_mecanico);
    _controlador
      .consultarMantenimiento(id_mecanico)
      .then((respuestaDB) => {
        let registros = respuestaDB.rows;
        let mensaje = registros.length > 0 ? "mantenimientos consultados " : "Sin registro.";
        res.send({ ok: true, info: registros, mensaje });
      })
      .catch((error) => {
        res.send(error);
      });
  });


  module.exports = router;