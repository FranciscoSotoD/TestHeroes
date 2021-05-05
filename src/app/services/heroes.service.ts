import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroes: any[] = [];

  constructor( private http: HttpClient ) { 

    console.log('Servicio del heroe hecho'); 

  }

  getHeroes() {
    return this.http.get('https://akabab.github.io/superhero-api/api/all.json')
      .subscribe( (resp: any) => {
        this.heroes = resp;
        console.log('Servicio',resp);
      })
  };

  
}
