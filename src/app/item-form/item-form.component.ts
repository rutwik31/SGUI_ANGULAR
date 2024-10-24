import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ItemService} from '../item.service';
import { HttpClientModule } from '@angular/common/http'; // Import here
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  providers:[ItemService],
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent {

  itemName: string = '';
  itemDescription: string = '';
  lstItemDetails : any = [];

  constructor(private itemService: ItemService) {} // Inject the service
  ngOnInit(){
    this.getItemDetails();
  }
  onSubmit() {
    const newItem = {
      item_name: this.itemName,
      item_description: this.itemDescription
    };

    this.itemService.addItem(newItem).subscribe(
        (data) => {
        this.resetForm();
        this.getItemDetails();
      },
      (error :any) => {
        alert("Item Added Successfully");
        this.getItemDetails();
        this.resetForm();
      }
    );
  }
  resetForm() {
    this.itemName = '';
    this.itemDescription = '';
  }
  getItemDetails(){
    debugger;
    this.itemService.getItemDetails().subscribe(
      (data) => {
      this.lstItemDetails = data;
    },
    (error : any) => {
      this.lstItemDetails = [];
    }
  );
  }
}
