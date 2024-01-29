import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})

export class FragenServiceMCFragen {

  constructor(private http : HttpClient) { }

  getFragenMcJson(){
    return this.http.get<any>("../../assets/LPI-2019-1-102d-QA-MCFragen.json")

  }

  getFragenScJson(){
    return this.http.get<any>("../../assets/LPI-2019-1-102d-QA-SCFragen.json")

  }
  getFragenFlson(){
    return this.http.get<any>("../../assets/LPI-2019-1-102d-QA-EingabeFragen.json")

  }

}

