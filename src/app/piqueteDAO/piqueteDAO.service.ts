import { Injectable } from '@angular/core';
import { PiqueteModel } from '../model/piqueteModel';
import { Storage } from '@ionic/storage';
import { ConsumoAnimalModel } from '../model/consumoAnimalModel';

@Injectable({
  providedIn: 'root'
})
export class PiqueteDaoService {
  
  constructor(private storage: Storage) { }
  

  public salvarPiquete(piquete: PiqueteModel): void {
    var timestamp = new Date().getTime(); //Pega o tempo do sistema para usar como ID.
    piquete.id = timestamp.toString(); //Atribui o mesmo valor da KEY para o ID.
    piquete.tipo = 'piquete';
    this.storage.set(timestamp.toString(), piquete); //Passa o tempo em string para ser usado como KEY
                                                  // e o objeto.
  }

  public salvarConsumoAnimal(consumo: ConsumoAnimalModel): void {
    var timestamp = new Date().getTime(); //Pega o tempo do sistema para usar como ID.
    consumo.id = timestamp.toString(); //Atribui o mesmo valor da KEY para o ID.
    consumo.tipo = 'consumo';
    this.storage.set(timestamp.toString(), consumo); //Passa o tempo em string para ser usado como KEY
                                                  // e o objeto.
  }

  //Função que retorna todos os dados do Storage.
  public getCalculo() {
    let any: PiqueteModel[] = []
    
    return this.storage.forEach((value, key, index) => {
      if(value.tipo == 'piquete') {
        any.push(value);
      }
      else {
        return;
      }
    }).then(() => any);
  }

  //Função que retorna todos os dados do Storage.
  public getCalculoConsumo() {
    let any: ConsumoAnimalModel[] = []


    return this.storage.forEach((value, key, index) => {
      if(value.tipo == 'consumo') {
        any.push(value);
      }
      else {
        return;
      }
      
    }).then(() => any);
  }

  //Função para deletar do Storage
  //Recebe o ID
  public deletar(key) {
    this.storage.remove(key);
  }
}
