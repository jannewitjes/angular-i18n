import { Component } from '@angular/core';
import { $localize } from "@angular/localize/init";

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
    standalone: true
})
export class HeroComponent {
  componentText = $localize `translate menu text for example`;
}
