import { Component, OnInit  } from '@angular/core';
import { FragenServiceMCFragen } from '../services/fragen.services';

@Component({
  selector: 'app-check-m',
  templateUrl: './check-m.component.html',
  styleUrls: ['./check-m.component.css'],
})
export class CheckMComponent implements OnInit{
  public ClickNummer = 1;
  public frageH  : any =[];
  public frageA  : any =[];

  public frageText : any;
  public FragenNummer : any;
  public auswahlA : any;
  public auswahlB : any;
  public auswahlC : any;
  public auswahlD : any;
  public auswahlE : any;

  constructor(private fragenService : FragenServiceMCFragen){};

  ngOnInit(): void {

    this.getFragen();
    this.frageH();
    }
  weiterFrage(){
    this.ClickNummer++;

    }



  zuruckFrage(){
    if(this.ClickNummer>1)
    {
        this.ClickNummer--;
     }
  }
  getFragen(){
    this.fragenService.getFragen()
    .subscribe(res=>
    {
      this.frageH = res;
    })
  }

  wahlA(KorrekteAntwort,A)
  {
    if (KorrekteAntwort==A) {

    }
  }
  wahlB(){}
  wahlC(){}
  wahlD(){}
  wahlE(){}




}


