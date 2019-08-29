import { Negociacoes, Negociacao } from '../models/index';
import { DiaDaSemana, imprime } from '../helpers/index';
import { NegociacoesView, MensagemView } from '../views/index';
import { domInject, throttle } from '../helpers/decorators/index';
import { NegociacaoService } from '../services/index';
/**
 * @namespace ts/controllers/NegociacaoController
 * @exports NegociacaoController
 */
export class NegociacaoController{

  /** @var _inputData:JQuery */
  @domInject('#data')
  private _inputData: JQuery;

  /** @var _inputQuantidade:JQuery */
  @domInject('#quantidade')
  private _inputQuantidade: JQuery;

  /** @var _inputValor:JQuery */
  @domInject('#valor')
  private _inputValor: JQuery;

  /** @var _negociacoes:Negociacoes */
  private _negociacoes = new Negociacoes();
  /** @var _negociacoesView:NegociacoesView */
  private _negociacoesView = new NegociacoesView('#negociacoesView', true);
  /** @var _mensagemView:MensagemView */
  private _mensagemView = new MensagemView('#mensagemView', true);
  /** @var _negociacaoService:NegociacaoService */
  private _negociacaoService = new NegociacaoService();
  /**
   * @constructor
   */
  constructor(){
    this._negociacoesView.update(this._negociacoes);
  }

  /**
   * @access public
   * @param evento:Event
   * @description adiciona uma negociação no banco
   * @returns void
   */
  @throttle()
  adiciona(): void{

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
    imprime(negociacao, this._negociacoes);

    this._negociacoesView.update(this._negociacoes);

    this._mensagemView.update("Negociação adicionada com sucesso");
  }

  private _isWorkDay(data:Date):boolean{
    return data.getDay() == DiaDaSemana.Sabado
        || data.getDay() == DiaDaSemana.Domingo;
  }

  /**
   * @access public
   * @description pega os dados das negociações na API e bota na tabela
   * @returns void
   */
   @throttle()
   async importaDados(){
     try{
       // tipagem "any" para evitar falsa acusação de erro do compilador
       let negociacoesParaImportar:any =
          await this._negociacaoService
           .obterNegociacoes((res: Response) => {
             if(res.ok)
               return res;
             throw new Error(res.statusText);
           })
      negociacoesParaImportar
       .filter((negociacao: Negociacao) =>
         !this._negociacoes.toArray().some(jaImportada =>
           negociacao
            .isEquals(jaImportada)))
       .forEach(
         (negociacao: Negociacao) => this._negociacoes.adiciona(negociacao)
       );
             this._negociacoesView.update(this._negociacoes)
      }catch(err){
        this._mensagemView.update(err.message);
      }
   }
}
