import { Negociacoes, Negociacao } from '../models/index';
import { DiaDaSemana } from '../helpers/DiaDaSemana';
import { NegociacoesView, MensagemView } from '../views/index';
import { logarTempoDeExecucao } from '../helpers/decorators/index';
/**
 * @namespace ts/controllers/NegociacaoController
 * @exports NegociacaoController
 */
export class NegociacaoController{

  /** @var JQuery _inputData */
  private _inputData: JQuery;
  /** @var JQuery _inputQuantidade */
  private _inputQuantidade: JQuery;
  /** @var JQuery _inputValor */
  private _inputValor: JQuery;
  /** @var Negociacoes _negociacoes */
  private _negociacoes = new Negociacoes();
  /** @var NegociacoesView negociacoesView */
  private _negociacoesView = new NegociacoesView('#negociacoesView', true);
  /** @var MensagemView mensagemView */
  private _mensagemView = new MensagemView('#mensagemView', true);

  /**
   * @constructor
   */
  constructor(){
    this._inputData = $("#data");

    this._inputQuantidade = $("#quantidade");

    this._inputValor =  $("#valor");

    this._negociacoesView.update(this._negociacoes);
  }

  /**
   * @access public
   * @param Event evento
   * @description adiciona uma negociação no banco
   * @returns void
   */
  @logarTempoDeExecucao()
  adiciona(evento: Event): void{
    evento.preventDefault();

    let data = new Date((this._inputData.val()).replace(/-/g, '/'));

    if(this._isWorkDay(data)){
      this._mensagemView.update("Somente negociações em dias úteis, por favor");
      return;
    }
    const negociacao = new Negociacao(
                        data,
                        parseInt(this._inputQuantidade.val()),
                        parseFloat(this._inputValor.val())
                       );
     this._negociacoes.adiciona(negociacao);

    this._negociacoesView.update(this._negociacoes);

    this._mensagemView.update("Negociação adicionada com sucesso");
  }

  private _isWorkDay(data:Date):boolean{
    return data.getDay() == DiaDaSemana.Sabado
        || data.getDay() == DiaDaSemana.Domingo;
  }
}
