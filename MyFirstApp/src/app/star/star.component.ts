import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{

  @Input() rating: number;      //input is used for the showing given value for star rating
  starWidth: number;

  constructor() { }
  ngOnChanges(): void {
    this.starWidth=this.rating * 75 / 5;       //75 is given width in html
  }

  ngOnInit(): void {
  }

}
