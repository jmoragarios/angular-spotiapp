import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Spotify Service works!');
    
   }

   getQuery( query: string ){
     const url = `https://api.spotify.com/v1/${ query }`;

     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDd2hYCoPJ3GSvSz8Tk8LOCwUJRdvSYZ_1JymKQEtbJZJ0LzhXsjIIAdvS8VrQA_FymeyhB7ap5jOmdhgc'
    });

    return this.http.get(url, { headers });

   }
   getNewReleases() {

    return this.getQuery('browse/new-releases')
                .pipe( map( data => data['albums'].items ));
                
   }

   getArtist( term: string ){

    return this.getQuery(`search?q=${ term }&type=artist&limit=15`)
                .pipe( map( data => data['artists'].items ));

   }
}
