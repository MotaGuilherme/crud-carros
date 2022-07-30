import { Document } from 'mongoose';

export class User extends Document {
   /**
   * O nome será utilizado para qualquer coisa (Perfil, Home Page, etc) que precisa exibir
   *informações da pessoa conectada.
   * @example "Paulo Salvatore"
   */
  name: string;

  /**
   * O e-mail é necessário apra o login e para o cadastro
   * @example email@email.com
   */
  email: string;

    /**
   * A senha é utilizada para cadastro e login do usuário
   * 
   * @example 123@abc
   */
  password: string;
}
