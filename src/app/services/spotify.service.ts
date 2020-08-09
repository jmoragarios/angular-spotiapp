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
      'Authorization': 'Bearer BQCztRVZW_xlBctweVywwc-wGIXZ3Z68fOVire5IlbAqOap6_wDYSgPW-XiFtynay7qFCw1B3pV9PlcARcQ'
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
