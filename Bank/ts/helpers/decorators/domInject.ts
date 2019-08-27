export function domInject(seletor:string){
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
