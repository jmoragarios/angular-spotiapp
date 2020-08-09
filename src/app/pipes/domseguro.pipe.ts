import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {
  /**
   *
   */
  constructor( private domSanitizer: DomSanitizer ) {  }

  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    const baseUrl = "https://open.spotify.com/embed?uri=";
    return this.domSanitizer.bypassSecurityTrustResourceUrl( baseUrl + value );
  }

}
