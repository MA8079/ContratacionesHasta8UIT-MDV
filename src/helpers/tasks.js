const { pool } = require("../databases/database");
const cron = require("node-cron");
const updateExpiredPosts = async () => {
    try {
        await pool.query('CALL ACTUALIZAR_ESTADO_REQUERIMIENTO()');

    } catch (error) {
        console.log('Error al actualizar', error);
    }
}
const startTasks = () => {
    cron.schedule('0 0 * * *', () => {
        //console.log('Estoy trabajando');
        updateExpiredPosts();

    });
}
module.exports = { startTasks }