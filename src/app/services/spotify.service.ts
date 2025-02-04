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
      'Authorization': 'Bearer BQAEMcG8Uhv2jrcfhf47jrfmlua21TbxNLDUbvQio8VW2erWX0oQHJHWRcid2JP-wNpucAH1vciKBDeHmsk'
    });

    return this.http.get(url, { headers });

   }
   getNewReleases() {

    return this.getQuery('browse/new-releases')
                .pipe( map( data => data['albums'].items ));
                
   }

   getArtists( term: string ){

    return this.getQuery(`search?q=${ term }&type=artist&limit=15`)
                .pipe( map( data => data['artists'].items ));

   }

   getArtist( id: string ){
     return this.getQuery(`artists/${ id }`);
   }

   getTopTracks( id: string ){
     return this.getQuery(`artists/${ id }/top-tracks?country=US`)
                .pipe( map( data => data['tracks'] ));
   }
}
