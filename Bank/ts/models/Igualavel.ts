/**
 * @namespace ts/models/Igualavel
 * @description um objeto dessa interface pode ser comparado com outro de mesmo tipo
 */
export interface Igualavel<T>{
  /**
   * @access public
   * @description compara objeto com this
   * @param T:objeto
   * @return true
   */
  isEquals(objeto: T):boolean
}
