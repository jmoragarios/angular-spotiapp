import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})

export class ArtistComponent {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor( private router: ActivatedRoute, private spotify: SpotifyService ) {
    this.router.params.subscribe( params => {
      this.getArtist( params['id'] );
      this.getTopTracks( params['id'] );
    });
    
   }

  getArtist(id: string) {

    this.loading = true;
    this.spotify.getArtist(id)
      .subscribe(data => {
        this.artist = data;
        this.loading = false;
      });
    
  }

  getTopTracks( id: string ){
    
    this.spotify.getTopTracks( id )
                .subscribe((data: any) => {
                  this.topTracks = data;
                  console.log(data);
                  
                });
  }

}
