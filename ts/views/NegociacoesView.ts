/**
 * @namespace js/views/NegociacoesView
 */
class NegociacoesView{
  private _div: HTMLDivElement;

  constructor(idElemento:string){
    this._div = <HTMLDivElement>document.getElementById(idElemento);
  }

  template(): string{
    return `
    <table class="table table-hover table-bordered">
          <thead>
              <tr>
                  <th>DATA</th>
                  <th>QUANTIDADE</th>
                  <th>VALOR</th>
                  <th>VOLUME</th>
              </tr>
          </thead>

          <tbody>
          </tbody>

          <tfoot>
          </tfoot>
      </table>
    `;
  }

  update():void{

    this._div.innerHTML = this.template();

  }
}
