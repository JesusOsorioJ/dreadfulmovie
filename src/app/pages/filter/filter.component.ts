import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent {
  page! : string
  constructor(private route: ActivatedRoute) {
    this.route.queryParams
      .subscribe(params => {
        this.page = params["type"]
   })
  }

}
