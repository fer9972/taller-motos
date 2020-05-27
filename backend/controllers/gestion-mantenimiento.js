/**
 * Controlador de gestion-motos
 */

//importar el servicion de postgres
const servicioPg = require("../services/postgres");

/**
 * Guardando la moto en la base de datos
 * @param {*} moto datos de la moto en forma de JSON
 */
let guardarMantenimiento = async (mantenimiento) => {
    try {
        let _servicio = new servicioPg();
        let sql = `INSERT INTO public.mantenimientos(
          id_mecanico, placa, fecha)
          VALUES (
              '${mantenimiento.id_mecanico}',
              '${mantenimiento.placa}',
              '${mantenimiento.fecha}'
              );`;
        let respuesta = await _servicio.ejecutarSql(sql);
        return respuesta;

    } catch (error) {
        throw { ok: false, err: error };
    }
};

//Eliminando un mantenimiento
let eliminarMantenimiento = async (placa) => {
    try {
        let _servicio = new servicioPg();
        let sql = `DELETE FROM public.mantenimiento WHERE placa ='${placa}'`;
        let respuesta = await _servicio.ejecutarSql(sql);
        return respuesta;
    } catch (error) {
        throw { ok: false };
    }
};

//consultar todos los mantenimientos
let consultarMantenimientos = async () => {
    try {
        let _servicio = new servicioPg();
        let sql = `SELECT id_mecanico, placa, fecha from public.mantenimientos`;
        let respuesta = await _servicio.ejecutarSql(sql);
        return respuesta;
    } catch (error) {
        throw { ok: false };
    }
};

//editar un mantenimiento
let modificarMantenimiento = async (mantenimiento, placa) => {
    if (mantenimiento.placa != placa) {
      console.log(mantenimiento.placa);
      throw {
        ok: false,
        mensaje: "La placa del mantenimiento no corresponde al enviado.",
      };
    }
    try {
      let _servicio = new servicioPg();
      let sql = `UPDATE public.mantenimientos
          SET
          id_mecanico='${mantenimiento.id_mecanico}',
          placa='${mantenimiento.placa}',
          fecha='${mantenimiento.fecha}',
          trabajos_realizados='${mantenimiento.trabajos_realizados}',
          horas_invertidas='${mantenimiento.horas_invertidas}'
          WHERE placa='${placa}';`;
  
      let respuesta = await _servicio.ejecutarSql(sql);
      return respuesta;
      console.log("editado correctamente")
    } catch (error) {
        console.log("no se pudo editar " + error)
      throw { ok: false, err: error };
    }
  };

//Consultar los mantenimientos de un mecanico
let consultarMantenimiento = async (id_mecanico) => {
    try {
        let _servicio = new servicioPg();
        let sql = `SELECT id_mecanico, placa, fecha, trabajos_realizados, horas_invertidas
         from public.mantenimientos where id_mecanico= '${id_mecanico}';`;
        let respuesta = await _servicio.ejecutarSql(sql);
        return respuesta;
    } catch (error) {
        throw { ok: false };
    }
};


//exportando metodos en forma de JSON
module.exports = {
    guardarMantenimiento,
    consultarMantenimientos,
    eliminarMantenimiento,
    modificarMantenimiento,
    consultarMantenimiento
};


