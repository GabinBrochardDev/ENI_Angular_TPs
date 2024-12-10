import { Component } from '@angular/core';
import { GenerationService } from '../../services/generation.service';
import { Generation } from '../../model/Generation';

@Component({
  selector: 'app-generation',
  imports: [],
  templateUrl: './generation.component.html',
  styleUrl: './generation.component.scss'
})
export class GenerationComponent {

  generations?: Generation[]

  constructor(readonly generationService: GenerationService) {}

  ngOnInit() {
    this.generations = this.generationService.getGeneration();
  }
}