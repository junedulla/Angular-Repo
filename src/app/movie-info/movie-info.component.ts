import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  title : String = "Movie Info";
  movieId : String = "";
  response : any;

  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

  search() {
        this.http.get('http://localhost:8761/api/movie-info-service/movies/'+ this.movieId)
    .subscribe((response) => {
      this.response = response;
      console.log(response);
    }
    )
  }

}
