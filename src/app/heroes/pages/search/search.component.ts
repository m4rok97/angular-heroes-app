import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  term: string = '';
  heroes: Hero[] = [];
  selectedHero: Hero | undefined;
  searchEmpty: boolean = false;
  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }


  search(){
    this.heroesService.getSuggestions(this.term.trim()).subscribe(heroes => {
      this.heroes = heroes
      this.searchEmpty = this.heroes.length === 0;
    });

  }

  optionSelected(event: any){
    console.log(event);

    if(!event.option.value){
      this.selectedHero = undefined;
      return;
    }
    const hero = event.option.value;
    console.log(hero)
    this.term = hero.superhero;

    this.heroesService.getHeroById(hero.id!).subscribe(hero => this.selectedHero = hero);
   }

}
