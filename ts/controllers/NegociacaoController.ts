class NegociacaoController{

  private _inputData: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;

  constructor(){
    this._inputData =  <HTMLInputElement>document.getElementById("data");

    this._inputQuantidade =  <HTMLInputElement> document.getElementById("quantidade");

    this._inputValor =  <HTMLInputElement> document.getElementById("valor");
  }

  adiciona(evento: Event){
    evento.preventDefault();

    const negociacao = new Negociacao(
                        new Date(
                          this._inputData.value.replace(/-/g, ',')
                        ),
                        parseInt(this._inputQuantidade.value),
                        parseFloat(this._inputValor.value)
                       );
                       
    console.log(negociacao);
  }
}