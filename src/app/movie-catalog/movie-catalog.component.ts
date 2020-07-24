import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'movie-catalog',
  templateUrl: './movie-catalog.component.html',
  styleUrls: ['./movie-catalog.component.css']
})
export class MovieCatalogComponent implements OnInit {

  title : String = "Movie Catalog";
  movieId : String = "";
  response : any;

  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

  search() {
        const url = 'http://localhost:8761/api/movie-catalog-service/catalog/'+ this.movieId;
      const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('zunu:pass') });
        this.http.get(url, { headers })
    .subscribe((response) => {
      this.response = response;
      console.log(response);
    }
    )
  }

}
