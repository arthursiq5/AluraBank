/**
 * @namespace ts/views/MensagemView
 */
class MensagemView extends View<string>{

  /**
   * @access public
   * @description produz template da tela
   * @param T model
   * @return string
   */
  template(model:string): string{
    return `<p class="alert alert-info">${model}</p>`;
  }
}
