const { pool } = require("./connectbd");

async function testConnection(){
    try {
        const result = await pool.query("SELECT NOW()");
        console.log("CONECTADO: ", result.rows[0]);
    } catch(error) {
        console.error("ERROR CONNECTION: ", error);
    } finally {
        await pool.end();
    }
}

const createPlayer = async (id, name) => {
    const query = `
    INSERT INTO players (id, name, points)
    VALUES ($1, $2, $3)
    `;
    const values = [id, name, "0"];

    const res = await pool.query(query, values)
    .catch(error => {
        console.log("ERROR CREATE PLAYER", error);
        return {status: "404"};
    });

    return res;
}

const getAll = async () => {
    const res = await pool.query("SELECT * FROM players")
    .catch(err => {
        console.error("ERRO GET ALL PLAYERS:\n", err);
        return {status: "404"};
    });
    return res;
}

const patchPoints = async (id, points) => {
    const query = `
        UPDATE players
        SET points = $1
        WHERE id = $2`;
    
    const values = [points.toString(), id];

    const res = await pool
        .query(query, values)
        .catch( err => console.error("ERROR PATCH POINTS QUERY: ", err));

    return res;
    
}

const getPlayer = async (id) => {
    const query = `
        SELECT * FROM players WHERE id=$1
    `;

    const res = await pool.query(query, [id])
    .catch(err => {
        console.error("ERROR GET PLAYER:\n",err);
        return {status: "404"};
    });
    return res;
}

const deletePlayer = async (id) => {
    const query = `
        DELETE FROM players
        WHERE id = $1;
    `

    
    const res = await pool.query(query, [id])
    .catch(err => {
        console.error("ERROR DELETE PLAYER:\n",err);
        return {status: "404"}
    });
    return res;
}
module.exports = {createPlayer, getAll, patchPoints, getPlayer, testConnection, deletePlayer};