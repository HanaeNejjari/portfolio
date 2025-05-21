import {Component, NgModule} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MenuComponent} from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone : true,
  imports: [RouterOutlet, MatToolbar, MenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
}
