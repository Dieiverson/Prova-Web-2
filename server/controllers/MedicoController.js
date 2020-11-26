const medico = require("../models/MedicoSchema.js");

class MedicoController {

    async Cadastrar(req, res) {
        var crmMedico = req.body.crm;
        var user = await medico.find({ crm: crmMedico });
        if (user[0] != null) {
            console.log("Não inseriu");
            return res.status(404).send("CRM já existe. Tente outro CRM.")
        } else {
            console.log("Inseriu");
            var resultado = await medico.create(req.body);
            return res.status(200).json(resultado);
        }
    }
    async Get(req, res) {
        var result = await medico.find({}); //Find sem parâmetro para trazer todos
        res.status(200).json(result);
    }
}

module.exports = new MedicoController();