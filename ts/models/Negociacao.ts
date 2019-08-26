/**
 * @namespace ts/models/Negociacao
 * @exports Negociacao
 */
export class Negociacao{

  /**
   * @constructs
   * @param Date data
   * @param number quantidade
   * @param number valor
   */
  constructor(
    readonly data: Date,
    readonly quantidade: number,
    readonly valor: number
  ){}

  /**
   * @access public
   * @return number valor
   */
  get volume(): number{
    return this.quantidade * this.valor;
  }
}
