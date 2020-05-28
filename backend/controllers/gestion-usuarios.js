/**
 * Controlador de gestion-usuario
*/
//importar el servicion de postgres

const servicioPg = require('../services/postgres')

/**
 * Guardando el usuario en la base de datos
 * @param {*} Usuario datos del usuario en en forma de JSON
 */
let guardarUsuario = async (usuario)=> {
    try {
        let _servicio = new servicioPg()
        let sql = `INSERT INTO public.usuarios(
             tipo_documento, documento, nombre, apellidos, celular, correo, rol, clave)
        VALUES (
            '${usuario.tipo_documento}',
            '${usuario.documento}',
            '${usuario.nombre}',
            '${usuario.apellidos}',
            '${usuario.celular}',
            '${usuario.correo}',
            '${usuario.rol}',
            md5('${usuario.clave}')
            );`;
            console.log(this.sql)
        let respuesta = await _servicio.ejecutarSql(sql);
        console.log("se agregó correctamente")
        return respuesta;
    } catch (error) {
        throw{ok: false };
    }
}

//editar un usuario
let modificarUsuario = async (usuario, documento) => {
    try {
      let _servicio = new servicioPg();
      let sql = `UPDATE public.usuarios
          SET
          nombre='${usuario.nombre}',
          apellidos='${usuario.apellidos}',
          celular='${usuario.celular}',
          correo='${usuario.correo}'
          WHERE documento='${documento}'`;
  
      let respuesta = await _servicio.ejecutarSql(sql);
      return respuesta;
    } catch (error) {
        console.log("no se pudo editar")
      throw { ok: false, err: error };
    }
  };

  //Eliminando un usuario
let eliminarUsuario = async (documento) => {
    try {
      let _servicio = new servicioPg();
      let sql = `DELETE FROM public.usuarios WHERE documento ='${documento}'`;
      let respuesta = await _servicio.ejecutarSql(sql);
      return respuesta;
    } catch (error) {
      throw { ok: false };
    }
  };

  //consultar los usarios
  let consultarUsuarios = async () => {
    try {
      let _servicio = new servicioPg();
      let sql = `SELECT * from public.usuarios`;
      let respuesta = await _servicio.ejecutarSql(sql);
      return respuesta;
    } catch (error) {
      throw { ok: false };
      console.log(error)
    }
  };

  //exportando metodos en forma de JSON
  module.exports = {
    guardarUsuario,
    consultarUsuarios,
    modificarUsuario,
    eliminarUsuario
  };