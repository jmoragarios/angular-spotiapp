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
      'Authorization': 'Bearer BQCK3bra5SMGyGmS-jWlT7sneKOKzh08UJn8QfSblv4t9RZSS7t9mhp9-0bv47VTpFRmBgeFbFoPmiUUulc'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
   }
}
