import { db } from "../config/database.js";
import modelUsuario from "../models/model.usuario.js";
import {createJWT} from '../config/token.js'
import bcrypt from 'bcrypt'

const Login = (req, res) => {
  modelUsuario.Login(req.body.email, async(err, result) => {
    if (err) {
      res.status(500).send(err);
    } else if (result.length == 0) {
      res.status(401).json({ erro: "E-mail inválido!" });
    } else {

        if (await bcrypt.compare(req.body.senha, result[0].senha)) {
            
            let resultado = result[0];
            resultado["token"] = createJWT(result[0].id_usuario);

            delete resultado.senha;
            res.status(200).json(resultado);
        }else{
            res.status(401).json({ erro: "Senha inválida!" });
        }

    }
  });
};

const Inserir = (req, res) => {
    modelUsuario.Inserir(req.body, (err, result)=>{
        if (err) {
            res.status(500).send(err);
          }  else {
            let resultado = result;
            resultado["token"] = createJWT(result.id_usuario);
            res.status(201).json(resultado);
          }
    })
}

const ListarId = (req, res) => {
 

  if (req.params.id_usuario != req.id_usuario) {
    return res.status(401).json({ erro: "Operação não permitida(Obter informações de outro usuário" });
  }

  modelUsuario.ListarId(req.params.id_usuario, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result[0]);
    }
  });
};

const Editar = (req, res) => {
  

  modelUsuario.Editar(req.id_usuario, req.body.nome, req.body.email, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json({ id_usuario: req.id_usuario });
    }
  });
};

export default { Login, Inserir, ListarId, Editar };
