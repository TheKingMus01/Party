import { Component, OnInit , ChangeDetectionStrategy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('200ms')
      ])
    ])
  ]
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data: any = {
    imageId: "pDGNBK9A0sk",
    state: "default"
  };
  data1: any = {
    imageId: "pDGNBK9A0sk",
    state: "default"
  };
  data2: any = {
    imageId: "pDGNBK9A0sk",
    state: "default"
  };
  data3: any = {
    imageId: "pDGNBK9A0sk",
    state: "default"
  };

  cardClicked() {
    if (this.data.state === "default") {
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
  }
  cardClicked1() {
    if (this.data1.state === "default") {
      this.data1.state = "flipped";
    } else {
      this.data1.state = "default";
    }
  }
  cardClicked2() {
    if (this.data2.state === "default") {
      this.data2.state = "flipped";
    } else {
      this.data2.state = "default";
    }
  }
  cardClicked3() {
    if (this.data3.state === "default") {
      this.data3.state = "flipped";
    } else {
      this.data3.state = "default";
    }
  }

}
