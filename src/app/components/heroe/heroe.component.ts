import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent  {

  
  hero: any[] = [];

  constructor( private http: HttpClient,
               private heroeService: HeroesService ) { 

    this.http.get('https://akabab.github.io/superhero-api/api/all.json')
      .subscribe( (resp: any) => {
        this.hero = resp;
        console.log('Servicio',resp);
      })
      
    }
    
    
    
    ngOnInit(): void {
      // this.heroeService.getHeroes()
      // .subscribe( resp => {
        //   console.log( resp );
        //   this.hero = resp;
        // })
        
      }

  

}
