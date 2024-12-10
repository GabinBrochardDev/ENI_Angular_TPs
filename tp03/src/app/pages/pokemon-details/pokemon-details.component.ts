import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../model/Pokemon';

@Component({
  selector: 'app-pokemon-details',
  imports: [],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent {

  // Get id Param
  pokemon?: Pokemon

  constructor(private readonly pokemonService: PokemonService, private readonly route: ActivatedRoute) {}

  // Get PokemonById
  ngOnInit() {
    
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    
    console.log(id);
    
    this.pokemon = this.pokemonService.getPokemonById(id);
  }
}
