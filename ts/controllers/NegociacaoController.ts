/**
 * @namespace js/controllers/NegociacaoController
 */
class NegociacaoController{

  /** @var HTMLInputElement _inputData */
  private _inputData: HTMLInputElement;
  /** @var HTMLInputElement _inputQuantidade */
  private _inputQuantidade: HTMLInputElement;
  /** @var HTMLInputElement _inputValor */
  private _inputValor: HTMLInputElement;
  /** @var Negociacoes _negociacoes */
  private _negociacoes = new Negociacoes();
  /** @var NegociacoesView negociacoesView */
  private _negociacoesView = new NegociacoesView('negociacoesView');
  /** @var MensagemView mensagemView */
  private _mensagemView = new MensagemView('mensagemView');

  /**
   * @constructor
   */
  constructor(){
    this._inputData =  <HTMLInputElement>document.getElementById("data");

    this._inputQuantidade =  <HTMLInputElement> document.getElementById("quantidade");

    this._inputValor =  <HTMLInputElement> document.getElementById("valor");

    this._negociacoesView.update(this._negociacoes);
  }

  /**
   * @access public
   * @param Event evento
   * @description adic iona uma negociação no banco
   * @returns NegociacaoController this
   */
  adiciona(evento: Event): NegociacaoController{
    evento.preventDefault();

    const negociacao = new Negociacao(
                        new Date(
                          this._inputData.value.replace(/-/g, '/')
                        ),
                        parseInt(this._inputQuantidade.value),
                        parseFloat(this._inputValor.value)
                       );
     this._negociacoes.adiciona(negociacao);

    this._negociacoesView.update(this._negociacoes);

    this._mensagemView.update("Negociação adicionada com sucesso");

    return this;
  }
}
