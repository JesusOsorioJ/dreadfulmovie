import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html'
})
export class IconsComponent {
  @Input() icons!:string;
}
