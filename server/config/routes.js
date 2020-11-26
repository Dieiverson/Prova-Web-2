const express = require("express");
const router = express.Router();
const MedicoController = require("../controllers/MedicoController.js");


//router.get("/", usuarioController.Get);
router.post("/medico/cadastrar", MedicoController.Cadastrar);
router.get("/medico/buscar/:crm", MedicoController.GetMedicoByCrm);
router.get("/medico/listar", MedicoController.Get);
router.post("/medico/alterar", MedicoController.Alterar);
router.get("/medico/remover/:crm", MedicoController.Delete);

module.exports = router;