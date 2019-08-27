import { View } from './View';
/**
 * @namespace ts/views/MensagemView
 * @exports MensagemView
 */
export class MensagemView extends View<string>{

  /**
   * @access public
   * @description produz template da tela
   * @param T model
   * @return string
   */
  template(model:string): string{
    return (model.length) ? `<p class="alert alert-info">${model}</p>` : "";
  }
}
