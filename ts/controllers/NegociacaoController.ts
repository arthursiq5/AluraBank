/**
 * @namespace ts/controllers/NegociacaoController
 */
class NegociacaoController{

  /** @var HTMLInputElement _inputData */
  private _inputData: HTMLInputElement;
  /** @var HTMLInputElement _inputQuantidade */
  private _inputQuantidade: HTMLInputElement;
  /** @var HTMLInputElement _inputValor */
  private _inputValor: HTMLInputElement;

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
   * @description adiciona uma negociação no banco
   * @returns NegociacaoController this
   */
  adiciona(evento: Event){
    evento.preventDefault();

    const negociacao = new Negociacao(
                        new Date(
                          this._inputData.value.replace(/-/g, '/')
                        ),
                        parseInt(this._inputQuantidade.value),
                        parseFloat(this._inputValor.value)
                       );

    console.log(negociacao);

    return this;
  }
}
