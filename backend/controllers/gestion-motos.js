/**
 * Controlador de gestion-motos
 */

//importar el servicion de postgres
const servicioPg = require("../services/postgres");

/**
 * Guardando la moto en la base de datos
 * @param {*} moto datos de la moto en forma de JSON
 */
let guardarMoto = async (moto) => {
    try {
      let _servicio = new servicioPg()
      let sql = `INSERT INTO public.motos(
          placa, estado, clase, marca, modelo, color, cilindraje,
           id_propietario, nro_soat, vencimiento_soat, nro_tecnomecanica, vencimiento_tecnomecanica)
      VALUES (
          '${moto.placa}',
          '${moto.estado}',
          '${moto.clase}',
          '${moto.marca}',
          '${moto.modelo}',
          '${moto.color}',
          '${moto.cilindraje}',
          '${moto.id_propietario}',
          '${moto.nro_soat}',
          '${moto.vencimiento_soat}',
          '${moto.nro_tecnomecanica}',
          '${moto.vencimiento_tecnomecanica}'
          );`;
      let respuesta = await _servicio.ejecutarSql(sql);  
      return respuesta;
  
    } catch (error) {
      throw { ok: false, err: error};
    }
  };

  let consultarMotos = async () => {
    try {
      let _servicio = new servicioPg();
      let sql = `SELECT * from public.motos`;
      let respuesta = await _servicio.ejecutarSql(sql);
      return respuesta;
    } catch (error) {
      throw { ok: false };
    }
  };

  let modificarMoto = async (moto, placa) => {
    if (moto.placa != placa) {
      console.log(moto.placa);
      throw {
        ok: false,
        mensaje: "la placa de la moto no corresponde al enviado.",
      };
    }
    try {
      let _servicio = new servicioPg();
      let sql = `UPDATE public.motos
          SET
          placa='${moto.placa}',
          estado='${moto.estado}',
          clase='${moto.clase}',
          color='${moto.color}',
          id_propietario='${moto.id_propietario}',
          nro_soat='${moto.nro_soat}',
          vencimiento_soat='${moto.vencimiento_soat}',
          nro_tecnomecanica='${moto.nro_tecnomecanica}',
          vencimiento_tecnomecanica='${moto.vencimiento_tecnomecanica}'
          WHERE placa='${placa}';`;
  
      let respuesta = await _servicio.ejecutarSql(sql);
      return respuesta;
    } catch (error) {
        console.log("no se pudo editar" + error)
      throw { ok: false, err: error };
    }
  };



  module.exports = {
    guardarMoto,
    consultarMotos,
    modificarMoto
  };