import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})

export class FragenService101d {

  private url = ("/LPIC-1_App/src/app/services/101d")
  constructor(private http : HttpClient)
  {

  }

  getFragenJson(){

     this.http.get<any>(this.url).subscribe(result=>console.log(result))

  }

}

