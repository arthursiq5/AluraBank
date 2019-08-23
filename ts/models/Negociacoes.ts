/**
 * @namespace ts/models/Negociacoes
 * @description encapsula array de negociações
 */
class Negociacoes{
  private _negociacoes: Negociacao[] = [];

  /**
   * @access public
   * @param Negociacao negociacao
   * @description adiciona negociacao ao array
   * @return Negociacoes this
   */
  adiciona(negociacao: Negociacao){
    this._negociacoes.push(negociacao);
    return this;
  }

  /**
   * @access public
   * @return Array negociacoes
   */
  toArray(){
    return this._negociacoes;
  }

  /**
   * @access public
   * @description esvazia objeto
   * @return Negociacoes this
   */
  esvazia(){
    this._negociacoes = [];
    return this;
  }
}
