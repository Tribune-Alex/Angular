import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-div',
  imports: [FormsModule],
  templateUrl: './div.html',
  styleUrl: './div.scss',
})
export class Div {
  public images: string[] = [
    '/weaponsimg/1.webp',
    '/weaponsimg/2.jpeg',
    '/weaponsimg/3.jpg',
    '/weaponsimg/4.jpg',
    '/weaponsimg/5.webp',
    '/weaponsimg/6.jpg',
    '/weaponsimg/7.jpg'
  ]

  public i: number = 0;
  next() {
    this.i++
    if (this.i === this.images.length) {
      this.i = 0;
    }
  }

  back() {
    this.i--;

    if (this.i < 0) {
      this.i = this.images.length - 1;
    }


  }
}
