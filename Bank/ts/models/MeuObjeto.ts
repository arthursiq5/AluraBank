import { Igualavel, Imprimivel } from './index';
/**
 * @namespace ts/models/MeuObjeto
 * @description diz que objeto implementa Imprimivel e
 Igualavel
 */
export interface MeuObjeto<T>
  extends Imprimivel, Igualavel<T>{ }
