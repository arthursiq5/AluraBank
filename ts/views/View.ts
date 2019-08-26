abstract class View<T>{
  /** @var JQuery _div */
  protected _div: JQuery;

  /**
   * @access public
   * @param string idElemento
   */
  constructor(idElemento:string){
    this._div = $(idElemento);
  }

  /**
   * @access public
   * @description atualiza tela
   * @param T model
   * @return null
   */
  update(model: T){
    this._div.html(this.template(model));
  }

  /**
   * @abstract
   * @access public
   * @description produz template da tela
   * @param T model
   * @return string
   */
  abstract template(model: T):string;
}
