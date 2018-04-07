import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [
    FruitService
  ]
})
export class FormComponent implements OnInit {
  fruits: Fruit[] = [];
  
  constructor(private fruitService: FruitService) { }

  ngOnInit() {
    this.getFruits();
  }

  handleSubmit(e, fruit): void {
    e.preventDefault();
    console.info(`Enjoy your ${fruit}!`);
  }

  private getFruits(): void {
    this.fruitService.getFruits()
      .subscribe(response => this.fruits = response.fruits);
  }
}
