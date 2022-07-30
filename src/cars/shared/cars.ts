import { Document } from 'mongoose';

export class Cars extends Document {
  /**
   * Nome ddo carro a aser alugado
   * @example "marea turbo 4.0"
   */
  name: string;
    /**
   * Campo de validação se o carro foi cadastrado ou não
   */
  rented: string;
}
