/**
 * @namespace ts/models/Imprimivel
 * @description um objeto desse tipo deve poder ser impresso na tela
 */
export interface Imprimivel{
  toText():void;
  toString():string;
}
