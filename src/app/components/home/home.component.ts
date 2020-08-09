import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  newestSongs: any[] = [];
  loading: boolean;
  error: boolean;
  errorMessage: string;

  constructor( private spotify: SpotifyService ) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases().subscribe( (data: any) => {

      this.newestSongs = data;
      this.loading = false;

    }, (serviceError) => {

      this.errorMessage = serviceError.error.error.message;

      this.loading = false;
      this.error = true;

    });

   }

  ngOnInit(): void {
  }

}
