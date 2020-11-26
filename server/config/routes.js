const express = require("express");
const router = express.Router();
const MedicoController = require("../controllers/MedicoController.js");

router.post("/medico/cadastrar", MedicoController.Cadastrar);
router.get("/medico/listar", MedicoController.Get);
module.exports = router;