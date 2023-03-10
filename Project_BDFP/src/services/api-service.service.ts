import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { runInThisContext } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  //API OMDB

  getMovieBySearchTerm(query: any) {
    return this.http.get(`https://www.omdbapi.com/?apikey=d3f6c0ee&t=${query}`);
  }

  getMoviesBySearchTerm(query: any) {
    return this.http.get(`https://www.omdbapi.com/?apikey=d3f6c0ee&s=${query}`);
  }

  getMovieById(query: any) {
    return this.http.get(`https://www.omdbapi.com/?apikey=d3f6c0ee&i=${query}`);
  }

  // API TheMovieDb

  // attribut "original_title"
  getMovieTMDbId(query: any) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${query}?api_key=11d68f95601d6ec7858fe9a41e26fd86&language=en-US`);
  }

  // permet de recuperer aussi l'id TMDB
  getMovieTMDBByIMDBID(query: any) {
    return this.http.get(`https://api.themoviedb.org/3/find/${query}?api_key=11d68f95601d6ec7858fe9a41e26fd86&language=en-US&external_source=imdb_id`)
  }

  getMoviesTMDBTitleSearch(query: any) {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=11d68f95601d6ec7858fe9a41e26fd86&language=en-US&query=${query}&page=1&include_adult=false`);
  }

  getReviewsTMDB(query: any) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${query}/reviews?api_key=11d68f95601d6ec7858fe9a41e26fd86&language=en-US&page=1`);
  }

  getCastTMDB(query: any) {
    return this.http.get(`http://api.themoviedb.org/3/movie/${query}/casts?api_key=11d68f95601d6ec7858fe9a41e26fd86`);
  }

  getCreditsTMDB(query: any) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${query}/credits?api_key=11d68f95601d6ec7858fe9a41e26fd86&language=en-US`);
  }

  getActorsIdByActorsName(query: any){
    return this.http.get(`https://api.themoviedb.org/3/search/person?api_key=11d68f95601d6ec7858fe9a41e26fd86&query=${query}`)
  }





}
