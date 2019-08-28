/**
 * @namespace ts/helpers/decorators/domInject
 * @access public
 * @param seletor:string
 * @return Function
 */
export function domInject(seletor:string){
  /**
   * @param target:any
   * @param propertyKey:string
   * @return void
   */
  return function(target:any, propertyKey:string){

    let elemento:JQuery;

    const getter = function(){
      if(!elemento){
        console.log(`buscando elemento ${propertyKey} com seletor ${seletor}`)
        elemento = $(seletor);
      }
      return elemento;
    };
    Object.defineProperty(target, propertyKey, {
      get: getter
    })
  }
}
