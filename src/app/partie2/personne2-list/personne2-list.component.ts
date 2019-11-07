import { Component, OnInit } from '@angular/core';
import { Personne } from '../Personne';

@Component({
  selector: 'app-personne2-list',
  templateUrl: './personne2-list.component.html',
  styleUrls: ['./personne2-list.component.css']
})
export class Personne2ListComponent implements OnInit {

  personnes = [
    {nom:'Ali MBARKI', age:21, etudiant:true},
    {nom:'Amira SMIRI', age:32, etudiant:false},
    {nom:'Rania MEDDEB', age:19, etudiant:true},
    {nom:'Sami TLILI', age:52, etudiant:false}
  ]
  /* Le tableau peut être créé aussi ainsi*/
  /*
  personnes = [ 
    new Personne('Ali MBARKI', 21, true),
    new Personne('Amira SMIRI', 32, false),
    new Personne('Rania MEDDEB', 19, true),
    new Personne('Sami TLILI', 52, false)
  ]*/
  constructor() { }

  ngOnInit() {
  }

}
