const express = require("express");
const router = express.Router();

const _controlador = require("../controllers/gestion-motos");


/**
 * Obteniendo las motos
 */
router.get("/moto", (req, res) => {
    _controlador.consultarMotos().then(respuestaDB => {
        let registros = respuestaDB.rows;
        res.send({ ok: true, info: registros, mensaje: "Motos consultadas" });
      }).catch(error => {
        res.send(error);
      });
});

/**
 * Guardando una Moto
 */
router.post("/moto", (req, res) => {
    try {
      //Capturar el body desde la solicitud
      let moto = req.body;
      console.log("moto" + moto)
  
      // Valida la información, sino se envia al catch
      //_controlador.validarPublicacion(info_publicacion);
  
      // Guardar la moto en base de datos
      _controlador.guardarMoto(moto).then(respuestaDB => {
        res.send({ ok: true, mensaje: "Moto guardada", info: moto});
      }).catch(error => {
        res.send(error);
        console.log("Error")
      });
  
      // Responder
    } catch (error) {
      res.send(error);
    }
});


  /**
 * Modificar una moto
 */
router.put("/moto/:placa", (req, res) => {
    // Capturar el parámetro de la ruta
    let placa = req.params.placa;
  
    let moto = req.body;
    console.log(moto);
    _controlador
      .modificarMoto(moto, placa)
      .then((respuestaDB) => {
        res.send({ ok: true, mensaje: "la moto ha sido modificada", info: respuestaDB});
      })
      .catch((error) => {
        res.send(error);
      });
  });



module.exports = router;
