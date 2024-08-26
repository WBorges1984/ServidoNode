
import { Router } from "express";
import controllerUsuarios from "../controllers/controller.usuarios.js";
import {verifyJWT} from '../config/token.js'

const routeUsuario = Router();

routeUsuario.post("/v1/usuarios/login", controllerUsuarios.Login);
routeUsuario.post("/v1/usuarios/registro", controllerUsuarios.Inserir);
routeUsuario.get("/v1/usuarios/:id_usuario", verifyJWT, controllerUsuarios.ListarId);
routeUsuario.put("/v1/usuarios", verifyJWT, controllerUsuarios.Editar);

export default routeUsuario;