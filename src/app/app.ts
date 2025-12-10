import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainView} from './components/main-view/main-view.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainView],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tvShows');
}
