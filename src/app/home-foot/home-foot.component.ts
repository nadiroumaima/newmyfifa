import { Component } from '@angular/core';

@Component({
  selector: 'app-home-foot',
  templateUrl: './home-foot.component.html',
  styleUrls: ['./home-foot.component.css']
})
export class HomeFootComponent {
  showElements: boolean = true;

  toggleVisibility() {
    this.showElements = !this.showElements;}

}
