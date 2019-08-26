import { Negociacoes, Negociacao } from '../models/index';

import { NegociacoesView, MensagemView } from '../views/index';
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
  private _negociacoesView = new NegociacoesView('#negociacoesView');
  /** @var MensagemView mensagemView */
  private _mensagemView = new MensagemView('#mensagemView');

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
   * @returns NegociacaoController this
   */
  adiciona(evento: Event): NegociacaoController{
    evento.preventDefault();

    const negociacao = new Negociacao(
                        new Date((this._inputData.val()).replace(/-/g, '/')),
                        parseInt(this._inputQuantidade.val()),
                        parseFloat(this._inputValor.val())
                       );
     this._negociacoes.adiciona(negociacao);

    this._negociacoesView.update(this._negociacoes);

    this._mensagemView.update("Negociação adicionada com sucesso");

    return this;
  }
}
