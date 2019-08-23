abstract class View<T>{
  protected _div: HTMLDivElement;

  constructor(idElemento:string){
    this._div = <HTMLDivElement>document.getElementById(idElemento);
  }

  update(model: T){
    this._div.innerHTML = this.template(model);
  }

  abstract template(model: T):string;
}
