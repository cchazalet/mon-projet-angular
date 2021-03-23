import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AppareilService {
    appareils = [
        {
          id: 1,
          name: 'Machine à laver',
          status : 'allumé'
        },
        {
          id: 2,
          name: 'Télèvision',
          status : 'éteint'
        },
        {
          id: 3,
          name: 'Ordi',
          status : 'éteint'
        }
      ];

    switchOnAll(){
        for(let appareil of this.appareils){
            appareil.status = 'allumé';
        }
    }

    switchOffAll(){
        for(let appareil of this.appareils){
            appareil.status = 'éteint';
        }
    }
    switchOnOne(index: number){
        this.appareils[index].status="allumé";
    }
    switchOffOne(index: number){
        this.appareils[index].status="éteint";
    }

    getAppareilById(id: number){
      const appareil = this.appareils.find(
        (appareilObject) => appareilObject.id === id
      );
      return appareil;
    }
}