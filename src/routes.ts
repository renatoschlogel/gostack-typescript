import { Request, Response} from "express";

import CreateUserService from "./services/CreateUserService";

export function saudacao(request: Request, response: Response) {

  const user = CreateUserService({
    name: 'Reanto',
    email: 'renato.s@outlook.com',
    password: '123456',
    techs: ['REnato', {title: 'title', experience: 1}]
  });

  user.email;
  

  return response.json({saudadacao: 'olá'})
}