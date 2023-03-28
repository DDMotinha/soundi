const {
    estilos,
    festas
} = require('../database/database')

async function estilosController(req, res, next) {
    const returnEstilos = await estilos()
    res.json(returnEstilos)
}

async function festasController(req, res, next){
    const returnEstilos = await festas()
    res.json(returnEstilos)
}

module.exports = {
    estilosController,
    festasController
}