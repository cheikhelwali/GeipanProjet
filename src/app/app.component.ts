import { Component, OnInit} from '@angular/core';
import { CasService } from './cas.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  // modèles
  title: string = "cours Angular";
  prof = "Michel Buffa";
  elements: string[] = ["Tennis", "foot", "jeux vidéo", "cinéma", "vélo"];
  nouvelElement: string = "";

  // On "injecte le service" qui servira par la suite à
  // récupérer des données sur le Web
  constructor(private casService: CasService) {}

  // Appelé lorsque le composant est créé
  ngOnInit(): void {
    this.getCases();
  }

  // méthodes
  onAddElement() {
    //this.elements.push("" + this.elements.length);
    this.elements.push(this.nouvelElement);
  }

  onDeleteElement(i) {
    this.elements.splice(i, 1);
  }

  getColor(i) {
    return i % 2 ? "red" : "green";
  }

  onUserWasClicked(nom) {
    alert("On a a clické sur le composant <app-username> : " + nom);
  }

  getCases() {
    this.casService.getCases().then(response => {
      this.elements = response.data;
    });
  }
}
