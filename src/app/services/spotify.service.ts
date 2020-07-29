import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Spotify Service works!');
    
   }

   getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBC807LqUE50Ki83ZRg7u9Z1wi3z7m9e5BgcbpovGJurthHiIaKqx6Pdg9hCal0R1G0P5flnzOQlgzgxEY'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
             .subscribe(data => {
                 console.log(data);
      });
   }
}
