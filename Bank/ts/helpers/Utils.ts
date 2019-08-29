import { Imprimivel } from '../models/index';

/**
 * @param Imprimivel[]:objetos
 * @return void
 */
export function imprime(...objetos:Imprimivel[] ):void{
  objetos.forEach(objeto => objeto.toText());
}
