import { Component, Input } from '@angular/core';
import { Movie} from '../../models/movie.model'

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html'
})
export class TargetComponent {
  @Input() data! : Movie
}
