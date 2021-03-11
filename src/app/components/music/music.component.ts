
import { Component, OnInit } from '@angular/core';
import { SpotifyService} from '../../services/spotify.service';
@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent  {
  newSongs: any []=[];
  constructor( private spotify: SpotifyService) { 



    this.spotify.getNewReleases()
    .subscribe( (data:any) => {
       console.log(data.albums.items);
       this.newSongs = data.albums.items
      });
 }

}