import { Component, OnInit  } from '@angular/core';
import { FragenService101d } from '../services/fragen.services';

@Component({
  selector: 'app-check-m',
  templateUrl: './check-m.component.html',
  styleUrls: ['./check-m.component.css'],
  providers: [FragenService101d]
})
export class CheckMComponent implements OnInit{

  public fragenList : any =[];
  public richtigeAntwort:number = 0;

  constructor(private fragenService : FragenService101d){};

  ngOnInit(): void {
    this.getAllFragen();
  }



  getAllFragen(){
    this.fragenService.getFragenJson()


    ;
  }
}


