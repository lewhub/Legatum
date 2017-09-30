import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contract } from '../models/contract/contract.interface';
import { ActivatedRoute } from '@angular/router';
import { DashboardService} from '../services/dashboard.service';

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.css']
})
export class ContractDetailsComponent implements OnInit, OnDestroy {
  contract_nickname: string;
  private sub: any;

  uniqueContract: Contract;

  contract: Contract = {
    username: 'DEFAULT',
    contract_id: 'DEFAULT',
    createdAt: 'DEFAULT',
    updatedAt: 'DEFAULT',
    contract_nickname: 'DEFAULT',
    will_text: 'DEFAULT',
    file_name: 'DEFAULT',
    beneficiary: 'DEFAULT',
    hash: 'DEFAULT',
    pending: false,
    will_hash:'DEFAULT',
    contract_addr: 'DEFAULT'
  }
  
  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService,) { }

  
  // Get contract_nickname from params, then get contracts from dashboard.service and set component state with it
  setUniqueContract(): void {
      // Get the specific contract by passing the contract name to this component when navigating here
    this.sub = this.route.params.subscribe(params => {
      this.contract_nickname = params['contract-nickname'];
      console.log('the contract params is: ', this.contract_nickname);
      
      this.getUniqueContract()
        .then((results) => {
          console.log('The promise results are: ', results);
          this.contract = results;
        })
      console.log('The fetched contract is: ', this.uniqueContract);
      // this.contract = this.uniqueContract;
    })
 
  }

  // Promisify getting the current contract from dashboard service
  getUniqueContract(): Promise<any> {
    let promise = new Promise((resolve, reject) => {
       // Call on dashboardService.currentContracts() to fetch contracts and filter out needed contract by name
      this.dashboardService.currentContracts().filter(contract => {
        if (contract.contract_nickname === this.contract_nickname) {
          resolve(contract);
        }
      });
    });
    return promise;
  }

  ngOnInit() {
    this.setUniqueContract();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
