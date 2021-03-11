import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log ('spotify services ready')
   }
   getNewReleases(){
     const headers = new HttpHeaders({
       'Authorization' : 'Bearer BQDKOykcFuHsntJAC7X3m-crVJiMsSqNsfvjDKNrvG0N7ATXEPKBhvwlCPm5pj50A1ab3ZNa2P4rH19zDyo'
     })

     return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers});
     
    }
}

