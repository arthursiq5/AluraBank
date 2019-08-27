import { DiaDaSemana } from '../helpers/DiaDaSemana';
/**
 * @namespace ts/models/Negociacao
 * @exports Negociacao
 */
export class Negociacao{

  readonly data: Date;
  readonly quantidade: number;
  readonly valor: number;

  /**
   * @constructs
   * @param Date data
   * @param number quantidade
   * @param number valor
   */
  constructor(
    data: Date,
    quantidade: number,
    valor: number
  ){
    if(this._isWorkDay(data))
      throw new Error('Não é possível criar negociações em fins de semana, por favor, tente novamente');
    this.data = data;
    this.quantidade = quantidade;
    this.valor = valor;
  }

  /**
   * @access public
   * @return number valor
   */
  get volume(): number{
    return this.quantidade * this.valor;
  }

  private _isWorkDay(data:Date):boolean{
    return data.getDay() == DiaDaSemana.Sabado
        || data.getDay() == DiaDaSemana.Domingo;
  }
}
