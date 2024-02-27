import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly backendUrl = 'http://localhost:9090';
  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(`${this.backendUrl}/getAllMovies`);
  }
  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.backendUrl}/getMovieByID/${id}`);
  }
}
