import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpClient } from "@angular/common/http";
import {CasService} from '../cas.service';
import {cas} from '../model/model.cas';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cas-detail',
  templateUrl: './cas-detail.component.html',
  styleUrls: ['./cas-detail.component.css']
})
export class CasDetailComponent implements OnInit {

  id: number;
  casDetail:any;
  temoignageCas: any;

  constructor(private casService: CasService,public http: HttpClient, public activatedRoute: ActivatedRoute, public router: Router) {
    this.id = activatedRoute.snapshot.params['id'];
    console.log("id cas "+this.id);
  }

  ngOnInit() {
    this.getCasById(this.id);
    this.getTemoignageByCase(this.id);
  }

  getCasById(id: number){
    this.casService.getCas(id).then(response => {
      this.casDetail=response;
      console.log(response);
    });
  }


  getTemoignageByCase(id: number){

  this.casService.getTemByCas(id).then(response => {
    this.temoignageCas=response;
    console.log(response);
  });
  };


  backHome()
  {
    this.router.navigate(['casList']);
  }

}
