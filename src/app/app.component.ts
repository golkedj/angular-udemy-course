import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: dodgerblue
    }
    .whiteText {
      color: white
    }
  `]
})
export class AppComponent {
  username = '';
  buttonClickTimes : Array<Date>= [];
  buttonDetailsText = 'Display Details';
  showDetails = false;

  toggleShowDetails() {
    this.showDetails = !this.showDetails;
    this.buttonDetailsText = this.showDetails ? 'Hide Details' : 'Display Details';
    this.buttonClickTimes.push(new Date());
  }

  getColor(buttonClickTime) {
    // const index = this.buttonClickTimes.indexOf(buttonClickTime);
    return this.shouldStyle(buttonClickTime) ? 'blue' : 'transparent';
  }

  shouldStyle(buttonClickTime) {
    const index = this.buttonClickTimes.indexOf(buttonClickTime);
    return (index > 3);
  }
}
