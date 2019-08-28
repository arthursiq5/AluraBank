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
   importaDados():void{
     this._negociacaoService
         .obterNegociacoes((res: Response) => {
           if(res.ok)
             return res;
           throw new Error(res.statusText);
         })
<<<<<<< HEAD

=======
>>>>>>> e062b2f5b2cadaea964880e25fcba7eaf25cfd0e
         .then((negociacoesParaImportar:Negociacao[]) => {

           return negociacoesParaImportar
             .filter(negociacao =>
               !this._negociacoes.toArray().some(jaImportada =>
                 negociacao.isEquals(jaImportada)))
<<<<<<< HEAD

         })
         .then((negociacoesParaImportar:Negociacao[]) => {

           negociacoesParaImportar.forEach(
             negociacao => this._negociacoes.adiciona(negociacao)
           );
         })
         .catch(err => console.error(err));

         this._negociacoesView.update(this._negociacoes);
=======
         })
         .then((negociacoesParaImportar:Negociacao[]) => {
           negociacoesParaImportar.forEach(
             negociacao => this._negociacoes.adiciona(negociacao)
           );
           this._negociacoesView.update(this._negociacoes)
         })
         .catch(err => console.error(err))
>>>>>>> e062b2f5b2cadaea964880e25fcba7eaf25cfd0e
   }
}
