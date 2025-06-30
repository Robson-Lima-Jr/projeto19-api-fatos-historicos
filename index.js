import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json({mensagem: "API de fato histórico"});
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080");
});