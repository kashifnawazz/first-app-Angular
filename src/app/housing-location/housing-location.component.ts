import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template:`
  <section class="w-fit">
    <img class="w-2/6 " [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <h2 class="p-2 border w-fit m-2 rounded-lg hover:border-amber-500">{{ housingLocation.name }}</h2>
    <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
    <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
  </section>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {

  @Input() housingLocation!: Housinglocation;

}
