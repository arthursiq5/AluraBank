import { Negociacao, MeuObjeto } from './index';
/**
 * @namespace ts/models/Negociacoes
 * @description encapsula array de negociações
 * @exports Negociacoes
 */
export class Negociacoes implements MeuObjeto <Negociacoes>{
  /** @var Negociacao[] negociacoes */
  private _negociacoes: Negociacao[] = [];

  /**
   * @access public
   * @param negociacao:Negociacao
   * @description adiciona negociacao ao array
   * @return Negociacoes this
   */
  adiciona(negociacao: Negociacao): Negociacoes{
    this._negociacoes.push(negociacao);
    return this;
  }

  /**
   * @access public
   * @return Negociacao[]
   */
  toArray(): Negociacao[]{
    return ([] as Negociacao[]).concat(this._negociacoes);
  }

  /**
   * @access public
   * @description esvazia objeto
   * @return Negociacoes
   */
  esvazia(): Negociacoes{
    this._negociacoes = [];
    return this;
  }

  /**
   * @access public
   * @description converte objeto para string
   * @return string
   */
  toString():string{
    return JSON.stringify(this._negociacoes);
  }

  /**
   * @access public
   * @description loga a string do objeto no terminal
   * @return void
   */
  toText():void{
    console.log(this.toString());
  }

  isEquals(negociacoes: Negociacoes):boolean{
    return JSON.stringify(this._negociacoes)
        == JSON.stringify(negociacoes._negociacoes);
  }
}
