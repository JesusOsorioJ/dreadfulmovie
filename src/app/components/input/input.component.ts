import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../../models/movie.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent {
  page = 1
  params = {filter:"",page:1}
  h = [1, 2, 3, 4, 5, 6, 7, 8]
  http = inject(HttpClient);
  movie: Movie[] = [];
  save: Movie[] = [];

  user!: FormGroup;

  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl('', Validators.required),
    });
    this.http.get<Movie[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data0: any) => {
        this.route.queryParams
          .subscribe(params => {
            this.params={filter:params["filter"],page:parseInt(params["page"])}
            console.log("this.params",this.params)

            if (params["filter"]?.length > 0) {
              this.movie = [] 
              for (let data of data0) {
                for (let date of data.title.split(" ")) {
                  if (params["filter"].toLowerCase() == date.toLowerCase()) {
                    this.movie = [...this.movie, data]
                  }
                }
              }
              
            } else { this.movie = data0 }
          })
      });
  }

  constructor(private route: ActivatedRoute, private router: Router) { }

  onSubmit() {
    this.router.navigate(
      ['/search'],
      { queryParams: { type: 'movies', filter: this.user.controls["name"].value.toLowerCase(), page: '1' } }
    );
  }
}
