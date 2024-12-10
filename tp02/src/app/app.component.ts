import { Component } from '@angular/core';
import { GenerationComponent } from "./pages/generation/generation.component";
import { PokemonComponent } from './pages/pokemon/pokemon.component';



@Component({
  selector: 'app-root',
  imports: [GenerationComponent, PokemonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tp02';
}
