import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CasService {
  constructor(private http: HttpClient) {}


  getCases(): Promise<any> {
    // on va chercher par GET le fichier JSON sur un REST endpoint
    return this.http.get("http://localhost:3000/get/cases").toPromise();
  }

  getCas(id: number): Promise<Object> {
    // on va chercher par GET le fichier JSON sur un REST endpoint
    return this.http.get("http://localhost:3000/get/cases/"+id).toPromise();
  }

  getTemByCas(id: number): Promise<Object> {
    // on va chercher par GET le fichier JSON sur un REST endpoint
    return this.http.get("http://localhost:3000/get/temoignages/"+id).toPromise();
  }
}
