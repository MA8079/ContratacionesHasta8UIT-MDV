const { pool } = require("../databases/database");

const getAnexosRequerimiento = async (id_requerimiento) => {
  const response = await pool.query(
    `select * from ANEXO_REQUERIMIENTO
        where id_requerimiento = ${id_requerimiento}`
  );

  return response;
};

const createAnexoRequerimiento = async (
  nombre,
  extension,
  id_requerimiento
) => {
  const response = await pool.query(
    `insert into ANEXO_REQUERIMIENTO(
            nombre,
            extension,
            id_requerimiento
        ) 
        values(
      '${nombre}',    
      '${extension}',
      ${id_requerimiento}
    )`
  );

  return response;
};

const deleteAllAnexosForRequerimiento = async (id_requerimiento) => {
  const response = await pool.query(`
    delete from ANEXO_REQUERIMIENTO 
    where id_requerimiento = ${id_requerimiento}`);

  return response;
};

const updateAnexoRequerimiento = async (
  nombre,
  extension,
  id_requerimiento
) => {
  const response = await createAnexoRequerimiento(
    nombre,
    extension,
    id_requerimiento
  );

  console.log(response);
  return response;
};

module.exports = {
  getAnexosRequerimiento,
  createAnexoRequerimiento,
  deleteAllAnexosForRequerimiento,
  updateAnexoRequerimiento,
};
