import { DiaDaSemana } from '../helpers/index';
import { Imprimivel } from './index';
/**
 * @namespace ts/models/Negociacao
 * @exports Negociacao
 */
export class Negociacao extends Imprimivel{
  /** @var data:Date */
  readonly data: Date;
  /** @var quantidade:number */
  readonly quantidade: number;
  /** @var valor:number */
  readonly valor: number;

  /**
   * @constructs
   * @param data:Date
   * @param quantidade:number
   * @param valor:number
   */
  constructor(
    data: Date,
    quantidade: number,
    valor: number
  ){
    super();
    if(this._isWorkDay(data))
      throw new Error('Não é possível criar negociações em fins de semana, por favor, tente novamente');
    this.data = data;
    this.quantidade = quantidade;
    this.valor = valor;
  }

  /**
   * @access public
   * @return number
   */
  get volume(): number{
    return this.quantidade * this.valor;
  }

  /**
   * @access private
   * @description verifica se o agendamento foi cadastrado em dia útil
   * @param data:Date
   * @returns boolean
   */
  private _isWorkDay(data:Date):boolean{
    return data.getDay() == DiaDaSemana.Sabado
        || data.getDay() == DiaDaSemana.Domingo;
  }

  toString():string{
    return `
    Data: ${this.data}
    Quantidade: ${this.quantidade}
    Valor: ${this.valor}
    Volume: ${this.volume}`;
  }

  toText():void{
    console.log(this.toString());
  }
}
