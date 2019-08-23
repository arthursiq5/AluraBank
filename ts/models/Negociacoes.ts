/**
 * @namespace js/models/Negociacoes
 * @description encapsula array de negociações
 */
class Negociacoes{
  /** @var Negociacao[] negociacoes */
  private _negociacoes: Negociacao[] = [];

  /**
   * @access public
   * @param Negociacao negociacao
   * @description adiciona negociacao ao array
   * @return Negociacoes this
   */
  adiciona(negociacao: Negociacao): Negociacoes{
    this._negociacoes.push(negociacao);
    return this;
  }

  /**
   * @access public
   * @return Array negociacoes
   */
  toArray(): Negociacao[]{
    return [].concat(this._negociacoes);
  }

  /**
   * @access public
   * @description esvazia objeto
   * @return Negociacoes this
   */
  esvazia(): Negociacoes{
    this._negociacoes = [];
    return this;
  }
}
