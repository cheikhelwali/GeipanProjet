import { Component, OnInit } from '@angular/core';
import { CasService } from '../cas.service';
import {cas} from '../model/model.cas';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-cas-list',
  templateUrl: './cas-list.component.html',
  styleUrls: ['./cas-list.component.css']
})
export class CasListComponent implements OnInit {

  cases : any;
  p: number=1;
  caseInfo: string;
  constructor(private casService: CasService,  private router: Router) {}

  ngOnInit(): void {
    this.getCases();
  }

  getCases() {
    this.casService.getCases().then(response => {
      this.cases = response.data;
    });
  }

  viewCaseDetail(id)
  {
    this.router.navigate(['casDetail/'+id]);
  }

}
