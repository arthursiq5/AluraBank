import { Negociacao, NegociacaoParcial } from '../models/index'
import { HandlerFunction } from '../helpers/index';
/**
 * @namespace ts/services/NegociacaoService
 */
export class NegociacaoService{
  /**
   * @access public
   * @description abstrai o acesso ao banco
   * @param handler:HandlerFunction
   * @returns Promise<Negociacao[]>
   */
  obterNegociacoes(handler:HandlerFunction): Promise<void|Negociacao[]> {
    return fetch('http://localhost:8080/dados')
      .then(res => handler (res))
      .then(res => res.json())
      .then((dados: NegociacaoParcial[]) =>
        dados.map(
          dado => new Negociacao(new Date(), dado.vezes, dado.montante)))
      .catch(err => console.error(err.message));
  }
}
