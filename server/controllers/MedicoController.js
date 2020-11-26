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

    async Alterar(req, res) {
        var medicoUser = req.body;
        console.log( req.body);
        const update = {
            "$set": {
              "nome": medicoUser.nome,
              "crm": medicoUser.crm,
              "especialidade":medicoUser.especialidade
            }
        };  
       
        var resultado = await medico.findOneAndUpdate({ crm: medicoUser.crm },update);
        return res.status(200).json(resultado);
        
    }

    async Get(req, res) {
        var result = await medico.find({}); //Find sem parâmetro para trazer todos
        res.status(200).json(result);
    }
    async Delete(req, res) {
        var crmMedico = req.params.crm;
        var result = await medico.findOneAndRemove({crm: crmMedico });
        res.status(200).json(result);
    }

    async GetMedicoByCrm(req, res) {
        var crmRecebido = req.params.crm;
        var result = await medico.find( {crm : crmRecebido },
            function(err, doc) {
                if (err)
                    return res.send(500, { error: err });
            });
        res.status(200).json(result);
    }
}

module.exports = new MedicoController();