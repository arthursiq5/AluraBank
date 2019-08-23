/**
 * @namespace js/models/Negociacao
 */
class Negociacao{

  /**
   * @constructs
   * @param Date data
   * @param number quantidade
   * @param number valor
   */
  constructor(
    private _data: Date,
    private _quantidade: number,
    private _valor: number
  ){}

  /**
   * @access public
   * @return Date data
   */
  get data(){
    return this._data;
  }

  /**
   * @access public
   * @return number quantidade
   */
  get quantidade(){
    return this._valor;
  }

  /**
   * @access public
   * @return number valor
   */
  get valor(){
    return this._valor;
  }

  /**
   * @access public
   * @return number valor
   */
  get volume(){
    return this.quantidade * this._valor;
  }
}
