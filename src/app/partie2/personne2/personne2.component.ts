import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../Personne';

@Component({
  selector: 'app-personne2',
  templateUrl: './personne2.component.html',
  styleUrls: ['./personne2.component.css']
})
export class Personne2Component implements OnInit {

  @Input() personne: Personne;

onChanger()
{
  this.personne.etudiant =! this.personne.etudiant;
}
  constructor() { }

  ngOnInit() {
  }

}
