import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
@Input() nomPersonne:string;
@Input() agePersonne:number;
@Input() isEtudiant:boolean;

onChanger()
{
  this.isEtudiant =! this.isEtudiant;
}
  constructor() { }

  ngOnInit() {
  }

}
