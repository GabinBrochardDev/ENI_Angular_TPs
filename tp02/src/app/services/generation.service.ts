import { Injectable } from '@angular/core';
import { Generation } from '../model/Generation';

@Injectable({
  providedIn: 'root'
})
export class GenerationService {

  private readonly generation: Generation[] = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    }
    ];

  getGeneration(): Generation[] {
    return this.generation;
  }
}
