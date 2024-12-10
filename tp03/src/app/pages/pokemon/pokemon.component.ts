import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../model/Pokemon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  imports: [RouterLink],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent {

  pokemons?: Pokemon[]

  constructor(private readonly pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemons = this.pokemonService.getPokemons();
  }
}