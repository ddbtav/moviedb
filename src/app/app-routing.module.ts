import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviesComponent} from './views/results/movies/movies.component';
import {MovieComponent} from './views/movie/movie.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'results'},
  {path: 'results', component: MoviesComponent},
  {path: 'movie/:id', component: MovieComponent },
  {path: '**', redirectTo: 'results'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
