import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personne-list',
  templateUrl: './personne-list.component.html',
  styleUrls: ['./personne-list.component.css']
})
export class PersonneListComponent implements OnInit {

  personnes = [
    {nom:'Ali MBARKI', age:21, etudiant:true},
    {nom:'Amira SMIRI', age:32, etudiant:false},
    {nom:'Rania MEDDEB', age:19, etudiant:true},
    {nom:'Sami TLILI', age:52, etudiant:false}
  ]
  constructor() { }

  ngOnInit() {
  }

}
