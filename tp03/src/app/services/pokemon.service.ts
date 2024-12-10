import { Injectable } from '@angular/core';
import { Pokemon } from '../model/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly pokemons: Pokemon[] = [
    {
      id: 1,
      name: 'Bulbizarre',
      description: 'Un Pokémon plante et poison avec un bulbe sur son dos.',
      generation: 1,
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
    },
    {
      id: 2,
      name: 'Pikachu',
      description: 'Le célèbre Pokémon électrique, compagnon d’Ash.',
      generation: 1,
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
    },
    {
      id: 3,
      name: 'Carapuce',
      description: 'Un Pokémon eau avec une carapace robuste.',
      generation: 1,
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png'
    },
    {
      id: 4,
      name: 'Salameche',
      description: 'Un Pokémon feu avec une flamme au bout de sa queue.',
      generation: 1,
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
    },
    {
      id: 5,
      name: 'Dracaufeu',
      description: 'Un puissant Pokémon dragon de type feu/vol.',
      generation: 1,
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png'
    },
    {
      id: 6,
      name: 'Florizarre',
      description: 'L’évolution finale de Bulbizarre avec une grande fleur sur son dos.',
      generation: 1,
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png'
    },
    {
      id: 7,
      name: 'Tortank',
      description: 'L’évolution finale de Carapuce avec de puissants canons.',
      generation: 1,
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png'
    },
    {
      id: 8,
      name: 'Chenipan',
      description: 'Un Pokémon insecte connu pour son appétit vorace.',
      generation: 1,
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png'
    },
    {
      id: 9,
      name: 'Roucool',
      description: 'Un Pokémon oiseau facile à apprivoiser.',
      generation: 1,
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png'
    },
    {
      id: 10,
      name: 'Evoli',
      description: 'Un Pokémon capable d’évoluer en plusieurs formes.',
      generation: 1,
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png'
    },
    {
      id: 11,
      name: 'Goupix',
      description: 'Un Pokémon renard de type feu avec une belle queue.',
      generation: 1,
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png'
    },
    {
      id: 12,
      name: 'Abo',
      description: 'Un serpent venimeux qui attaque ses proies rapidement.',
      generation: 1,
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png'
    },
    {
      id: 13,
      name: 'Machoc',
      description: 'Un Pokémon combat avec une force incroyable.',
      generation: 1,
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png'
    },
    {
      id: 14,
      name: 'Onix',
      description: 'Un énorme serpent de roche.',
      generation: 1,
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png'
    },
    {
      id: 15,
      name: 'Magicarpe',
      description: 'Un Pokémon poisson célèbre pour être inutile mais persévérant.',
      generation: 1,
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png'
    },
    {
      id: 16,
      name: 'Lokhlass',
      description: 'Un Pokémon aquatique connu pour transporter des voyageurs.',
      generation: 1,
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png'
    },
    {
      id: 17,
      name: 'Spectrum',
      description: 'Un Pokémon spectre connu pour ses farces effrayantes.',
      generation: 1,
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png'
    },
    {
      id: 18,
      name: 'Artikodin',
      description: 'Un des trois oiseaux légendaires de la première génération.',
      generation: 1,
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png'
    },
    {
      id: 19,
      name: 'Dracolosse',
      description: 'Un Pokémon dragon qui parcourt les cieux.',
      generation: 1,
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png'
    },
    {
      id: 20,
      name: 'Mewtwo',
      description: 'Un Pokémon légendaire créé par manipulation génétique.',
      generation: 1,
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png'
    }
  ];

  getPokemons(): Pokemon[] {
    return this.pokemons;
  }

  getPokemonById(id: number): Pokemon | undefined {
    return this.pokemons.find(pokemon => pokemon.id === id);
  }

}
