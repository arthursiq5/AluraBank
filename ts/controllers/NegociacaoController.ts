class NegociacaoController{

  private _inputData;
  private _inputQuantidade;
  private _inputValor;

  constructor(){
    this._inputData =  document.getElementById("data");
    this._inputQuantidade =  document.getElementById("quantidade");
    this._inputValor =  document.getElementById("valor");
  }

  adiciona(evento){
    evento.preventDefault();

    const negociacao = new Negociacao(
                          this._inputData.value,
                          this._inputQuantidade.value,
                          this._inputValor.value
                        );
    console.log(negociacao);
  }
}
