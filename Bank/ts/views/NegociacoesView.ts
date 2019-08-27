import { View } from './View';
import { Negociacoes } from '../models/Negociacoes';

/**
 * @namespace ts/views/NegociacoesView
 * @exports NegociacoesView
 */
 export class NegociacoesView extends View<Negociacoes>{

  /**
   * @abstract
   * @access public
   * @description produz template da tela
   * @param T model
   * @return string
   */
  template(model: Negociacoes): string{
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
            ${ model.toArray().map(negociacao =>
              `<tr>
                  <td>${negociacao.data.getDate()}/${(negociacao.data.getMonth()+1)}/${negociacao.data.getFullYear()}</td>
                  <td>${negociacao.quantidade}</td>
                  <td>${negociacao.valor}</td>
                  <td>${negociacao.volume}</td>
                </tr>
              `).join('')}
          <tbody>
          </tbody>

          <tfoot>
          </tfoot>
      </table>
    `;
  }
}
