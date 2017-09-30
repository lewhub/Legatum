import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router'
import { Contract } from '../models/contract/contract.interface';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-review-contract',
  templateUrl: './review-contract.component.html',
  styleUrls: ['./review-contract.component.css']
})
export class ReviewContractComponent implements OnInit {

  sub: any;
  newContract: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private dashboardService: DashboardService
  ) { }

  handleClickOnFinalize() {
    console.log('Right before GET, contract is: ', this.newContract);
    this.http.post('/newcontract', this.newContract)
      .subscribe(
        res => {
          console.log('POST response: ',res);
          //A success message should be displayed to user
          //User should be navigated back to dashboard
          this.router.navigateByUrl('/dashboard')
        },
        err => {
          console.log('Error with POSTing new contract');
          alert(`There was an error submitting your contract.
          please wait a few minutes and try again`);
        }
      );
  }

  ngOnInit() {
    this.newContract = this.dashboardService.newContract;
    //For testing, setting hash
    this.newContract.hash = '0xb4671e257cf96218550f8b5b944314ac4214125c421886e638baa3aa4c69559e';    
    this.newContract.username = this.dashboardService.userInfo.username;
    console.log('review contents: ', this.newContract.will_text);
  }
}
