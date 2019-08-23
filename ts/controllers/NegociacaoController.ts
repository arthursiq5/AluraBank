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

  /**
   * @constructor
   */
  constructor(){
    this._inputData =  <HTMLInputElement>document.getElementById("data");

    this._inputQuantidade =  <HTMLInputElement> document.getElementById("quantidade");

    this._inputValor =  <HTMLInputElement> document.getElementById("valor");
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

    this._negociacoes.toArray().forEach(negociacao => {
      console.log(negociacao.data);
      console.log(negociacao.quantidade);
      console.log(negociacao.valor);
    });

    return this;
  }
}
