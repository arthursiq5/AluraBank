class View{
  protected _div: HTMLDivElement;

  constructor(idElemento:string){
    this._div = <HTMLDivElement>document.getElementById(idElemento);
  }
}
