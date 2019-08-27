import { Negociacoes, Negociacao, NegociacaoParcial } from '../models/index';
import { DiaDaSemana } from '../helpers/DiaDaSemana';
import { NegociacoesView, MensagemView } from '../views/index';
import {domInject} from '../helpers/decorators/index';
/**
 * @namespace ts/controllers/NegociacaoController
 * @exports NegociacaoController
 */
export class NegociacaoController{

  /** @var JQuery _inputData */
  @domInject('#data')
  private _inputData: JQuery;

  /** @var JQuery _inputQuantidade */
  @domInject('#quantidade')
  private _inputQuantidade: JQuery;

  /** @var JQuery _inputValor */
  @domInject('#valor')
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
    this._negociacoesView.update(this._negociacoes);
  }

  /**
   * @access public
   * @param Event evento
   * @description adiciona uma negociação no banco
   * @returns void
   */
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

  importaDados(){

    function isOk(res: Response){
      if(res.ok){
        return res;
      }else{
        throw new Error(res.statusText);
      }
    }

    fetch('http://localhost:8080/dados')
      .then(res => isOk(res))
      .then(res => res.json())
      .then((dados: NegociacaoParcial[]) => {
        dados
          .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
          .forEach(negociacao => this._negociacoes.adiciona(negociacao));
        this._negociacoesView.update(this._negociacoes);
      })
      .catch(err => console.error(err.message))
  }
}
