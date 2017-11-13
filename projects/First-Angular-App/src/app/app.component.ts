import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
   h1 { 
    color: red;
   }
  `]
})
export class AppComponent {
  title = 'I am in the AppComponent';
  name = '';
  showSecret = false;
  log = [];
  
  onToggleDetails() {
      this.showSecret = !this.showSecret;
      this.log.push(this.log.length + 1);
  }
}
