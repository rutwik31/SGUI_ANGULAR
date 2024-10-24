import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemFormComponent } from './item-form/item-form.component'; // Import the standalone component
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemFormComponent,HttpClientModule], // Add ItemFormComponent to imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'item-manager';
}
