import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <p>
      housing-location works!
    </p>
    <section class="listing">
    <img class="listing-photo" [src]="_housingLocation.photo" alt="Exterior photo of {{_housingLocation.name}}">
    <h2 class="listing-heading">{{ _housingLocation.name }}</h2>
    <p class="listing-location">{{ _housingLocation.city}}, {{_housingLocation.state }}</p>
    <a [routerLink]="['/details', _housingLocation.id]">Learn More</a> 
    </section>
    
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {

  @Input()  _housingLocation!:  HousingLocation;

}