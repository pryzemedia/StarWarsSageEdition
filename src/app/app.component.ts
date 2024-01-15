import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";


import {routes} from "./app.routes";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SWSE Tools';
}

