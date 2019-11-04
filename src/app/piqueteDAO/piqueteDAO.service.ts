import { Injectable } from '@angular/core';
import { PiqueteModel } from '../model/piqueteModel';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PiqueteDaoService {

  constructor(private storage: Storage) { }

  public salvarPiquete(piquete: PiqueteModel): void {
    var timestamp = new Date().getTime(); //Pega o tempo do sistema para usar como ID.
    piquete.id = timestamp.toString(); //Atribui o mesmo valor da KEY para o ID.
    this.storage.set(timestamp.toString(), piquete); //Passa o tempo em string para ser usado como KEY
                                                  // e o objeto.
  }

  public salvarConsumoAnimal(piquete: PiqueteModel): void {
    var timestamp = new Date().getTime(); //Pega o tempo do sistema para usar como ID.
    piquete.id = timestamp.toString(); //Atribui o mesmo valor da KEY para o ID.
    this.storage.set(timestamp.toString(), piquete); //Passa o tempo em string para ser usado como KEY
                                                  // e o objeto.
  }

  //Função que retorna todos os dados do Storage.
  public getCalculo() {
    let any: PiqueteModel[] = []

    return this.storage.forEach((value, chave, index) => {
    any.push(value);
    }).then(() => any);

  }

  //Função para deletar do Storage
  //Recebe o ID
  public deletar(key) {
    this.storage.remove(key);
  }
}
