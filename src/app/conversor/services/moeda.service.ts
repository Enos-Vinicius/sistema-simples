import { Injectable } from '@angular/core';
import { Moeda } from '../models'

@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  private moedas: Moeda[] = [];

  constructor() {}

  private moedasObj = [ //http://fixar.io
    {"sigla": "EUR", "descricao": "Euro"},
    {"sigla": "AUD", "descricao": "Dólar australiano"},
    {"sigla": "BGN", "descricao": "Lev Búlgaro"},
    {"sigla": "BRL", "descricao": "Real Brasileiro"},
    {"sigla": "CAD", "descricao": "Dólar canadense"},
  ]

  listarTodas(): Moeda[] {
    if(this.moedas.length > 0){
      return this.moedas;
    }
    
    for(let moedaObj of this.moedasObj){
      let moeda: Moeda = new Moeda();
      Object.assign(moeda, moedaObj);
      this.moedas.push(moeda);
    }

    return this.moedas;
  }
}
