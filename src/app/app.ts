import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeTransition } from './shared/animations/presets';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [routeTransition]
})
export class App {
  title = 'Okul Panel';

  getRouteAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
