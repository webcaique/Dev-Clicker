const express = require("express");
const cors = require("cors");

const {
    createPlayer,
    getAll,
    patchPoints,
    getPlayer,
    deletePlayer
} = require("./query.js");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/get-all-players/", async (req, res) => {
    const data = await getAll();
    res.json(data);
});

app.post("/init-player/", async (req, res) => {
    const max = 126;
    const min = 33;
    let caracter;
    const arrId = [];
    const length = 32;
    let i = 0;
    for(i; i < length; i++) {
        caracter = Math.floor(Math.random() * (max - min + 1)) + min;
        arrId.push(caracter);
    }

    const uid = String.fromCharCode(...arrId);

    const response = await createPlayer(uid, req.body.name);
    
    res.json({uid, ...req.body});
});


app.patch("/patch-points/", async (req, res) => {
    const response = await patchPoints(req.body.id, req.body.points);
    res.json(response);
});

app.get("/player/:id", async (req, res) => {
    const response = await getPlayer(req.params.id);
    if(response.rowCount == 0){
        res.statusCode = 404;
        res.statusMessage = "Player Not Found";
    }
    res.json(response);
});

app.delete("/player-delete/", async (req, res) => {
    const response = await deletePlayer(req.body.id);
    res.json(response);
})

app.listen(8000);