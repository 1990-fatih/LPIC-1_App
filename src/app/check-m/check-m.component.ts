import { Component, OnInit } from '@angular/core';
import { FragenServiceMCFragen } from '../services/fragen.services';
import { Question } from '../interfaces/question';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-check-m',
  templateUrl: './check-m.component.html',
  styleUrls: ['./check-m.component.css'],


})
export class CheckMComponent implements OnInit {

  public ClickNummer = 0;
  public fragen: Question[] = [];
  public list : Array <string> = [];
  public status :boolean=false
  public frgnType:any;


  aktId: number = 0
  public frage: Question =
  {
    "qid": -1,
    "qtyp": "",
    "qtxt": [],
    "qanswers":[],
    "qcorrect": "",
    "qinfo": []
  }


  constructor(private fragenService: FragenServiceMCFragen) { };

  ngOnInit(): void {

    // this.getFragen();
    this.getFragenNew();
  }

  getFragenNew() {
    this.fragenService.getFragenNew()
      .subscribe(res => {
        this.fragen = res; this.list = []
      })
  }

  getFragenMcNew() {
    // wenn ich nur mc fragen haben will in this.fragen
    this.fragenService.getFragenNew()
      .subscribe(res => {
        this.fragen = res.filter(q => q.qtyp == 'mc'); this.list = []
      })
  }
  ersteFrage() {
    this.aktId = 0
    this.frage = this.fragen[this.aktId]

  }

  weiterFrage(a:any)
  {
    this.frgnType=a
    if(this.status)
    {
      this.ClickNummer++;
      this.fragen
      this.list = []
      this.status=false
    }
   /* else
    {
      this.ClickNummer--;
    }*/

  }
  ueberspringen() {
    // aktuelle Frage NICHT auswerten und nächste Frage aufrufen
    this.ClickNummer++;
    this.list = []
  }

  zuruckFrage() {
    if (this.ClickNummer > 0) {
      this.ClickNummer--;
    }
    this.list = []
  }

  antwortclick(a:any,)
  {

    if(this.frgnType="mc")
    {

    }
    if (this.frgnType="sc") {
      if (a) {
        this.status=true
      }

    }



  }

}


