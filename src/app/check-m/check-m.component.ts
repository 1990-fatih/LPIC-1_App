import { Component, OnInit  } from '@angular/core';
import { FragenServiceMCFragen } from '../services/fragen.services';

@Component({
  selector: 'app-check-m',
  templateUrl: './check-m.component.html',
  styleUrls: ['./check-m.component.css'],
})
export class CheckMComponent implements OnInit{
  public fragenNummer =1;
  public frageMc : any =[];
  public frageSc : any =[];
  public frageFl : any =[];
  public frageH  : any =[];

  constructor(private fragenService : FragenServiceMCFragen){};

  ngOnInit(): void {

    this.getFragen();
    this.frageSc();
    this.frageMc();
    this.frageFl();
  }

  getFragen(){

    this.fragenService.getFragenMcJson()
    .subscribe(res=>
    {
      this.frageMc = res;
    })


    this.fragenService.getFragenScJson()
    .subscribe(res=>
    {
      this.frageSc = res;


    })

    this.fragenService.getFragenFlson()
    .subscribe(res=>
    {
      this.frageFl = res;
    })


    if(this.frageFl[this.fragenNummer].Fragenummer=this.fragenNummer)
    {
      this.frageH = this.frageFl
    }
    else
    {
      if(this.frageSc[this.fragenNummer].Fragenummer=this.fragenNummer)
      {
        this.frageH = this.frageSc
      }
      else
      {
        if(this.frageMc[this.fragenNummer].Fragenummer=this.fragenNummer)
        {
          this.frageH = this.frageMc
        }

      }

    }

  }
  weiterFrage(){
  this.fragenNummer++;

  }

  zuruckFrage(){
    if(this.fragenNummer>0)
    {
      this.fragenNummer--;
    }

  }

}


