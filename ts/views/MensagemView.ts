class MensagemView extends View{

  update(model: string){
    this._div.innerHTML = this.template(model);
  }

  template(model:string): string{
    return `<p class="alert alert-info">${model}</p>`;
  }
}
