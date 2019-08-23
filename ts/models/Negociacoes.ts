class Negociacoes{
  private _negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao){
    this._negociacoes.push(negociacao);
    return this;
  }

  toArray(){
    return this._negociacoes;
  }

  esvazia(){
    this._negociacoes = [];
    return this;
  }
}
