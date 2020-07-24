import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieInfoComponent } from './movie-info/movie-info.component';
import { MovieCatalogComponent } from './movie-catalog/movie-catalog.component';
import { RatingDataComponent } from './rating-data/rating-data.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path : '', redirectTo: '/movie-catalog', pathMatch:'full'},
  {path: 'movie-catalog', component: MovieCatalogComponent},
  {path: 'movie-info' , component: MovieInfoComponent},
  {path: 'rating-data' , component: RatingDataComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
