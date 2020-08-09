import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artists: any [] = [];

  constructor(private spotify: SpotifyService) { }
  
  search(term: string){
    console.log(term);
    this.spotify.getArtist(term)
                .subscribe((data: any) => {
                  this.artists = data;
                });
  }

}
