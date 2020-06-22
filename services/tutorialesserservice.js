//INYECTO EL MODULO DE LA CONEXION Y CONFIG DE LA BASE DE DATOS
const {pool} = require('../config/db');

exports.getTutorialesDB = async () => {
    const tutorial = await pool.query('SELECT * FROM TUTORIAL');
    return tutorial.rows;
};

exports.getTutorialDB = async (id) => {
    const query = {
        text: 'SELECT * FROM TUTORIAL WHERE ID = $1',
        values: [id]
      }
    const tutorial = await pool.query(query);
    return tutorial.rows[0];
};

exports.deleteTutorialDB = async (id) => {
    const query = {
        text: 'DELETE FROM TUTORIAL WHERE ID = $1',
        values: [id]
      }
    const removeRow = await pool.query(query);
    return removeRow.rowCount;
};
exports.deleteAllDB= async () => {
  const query = {
      text: 'DELETE FROM TUTORIAL',
   }
  const removeRow = await pool.query(query);
  return removeRow.rowCount;
};
 
exports.addTutorialDB = async (tutorial) => {
    const query = {
        text: 'INSERT INTO TUTORIAL (titulo, descripcion, publicado) VALUES ($1, $2, $3)',
        values: [tutorial.titulo,tutorial.descripcion, tutorial.publicado]
      }
    const addRow = await pool.query(query);
    return addRow.rowCount;
}

exports.updateTutorialDB = async (tutorial,id) => {
  const query = {
      text: 'UPDATE TUTORIAL SET titulo = $1,descripcion = $2,publicado = $3 WHERE ID= $4 ',
      values: [tutorial.titulo, tutorial.descripcion, tutorial.publicado,id]
    }
  const updateRow = await pool.query(query);
  return updateRow.rowCount;
}

