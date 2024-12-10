import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { GenerationComponent } from './pages/generation/generation.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Home'},
    {path: 'pokemons', component: PokemonComponent, title: 'Pokemons'},
    {path: 'pokemon/:id', component: PokemonDetailsComponent, title: 'Pokemons'},
    {path: 'generations', component: GenerationComponent, title: 'Generation'},
    {path: '**', component: NotFoundComponent, title: 'Not Found'},
];
