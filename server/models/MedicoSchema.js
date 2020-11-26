const mongoose = require("mongoose");
const  medicoSchema = new mongoose.Schema({   
    nome: {
        type: String,
        required: [true, "O campo nome é obrigatório."]
    },
    crm: {
        type: String,
        required: [true, "O campo CRM é obrigatório."]
    },
    especialidade: {
        type: String,
        required: [true, "O campo especialidade é obrigatório."]
    },
    criadoEm: {
        type: Date,
        default: Date.now
}});

module.exports = mongoose.model("Medicos", medicoSchema);