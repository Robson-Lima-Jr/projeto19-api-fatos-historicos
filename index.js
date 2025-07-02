import express from 'express';
import {servicoBuscarFatoPorAno, validarAno} from './services/service.js';

const app = express();

app.get('/', (req, res) => {
    let anoFato = Number(req.query.ano);
    const anoValidado = validarAno(anoFato);
    let fato = servicoBuscarFatoPorAno(anoFato);

    if(!anoValidado.validacao) {
        res.status(400).json({erro: anoValidado.mensagem});
    } else {
        res.json({ano: anoFato, fato: fato});
    }
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080");
});
