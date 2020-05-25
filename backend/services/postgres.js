const { Pool } = require("pg");

class ServicioPG {
    constructor() {
        this.pool = new Pool({
            user: "postgres",
            host: "localhost",
            database: "taller",
            password: "1234",
            port: 5432
          });
    }
/**
 * Se ejecuta una consulta sql, se debe hacer con un metodo
 * asincrono ya que el orden de ejecucion es relevante
 * @param {*} sql la consulta a ejecutar
 */
async ejecutarSql(sql) {
    let respuesta = await this.pool.query(sql);
    return respuesta;
  }
}

//Se exporta la clase para poder usarla despues en todo el proyecto
module.exports = ServicioPG;