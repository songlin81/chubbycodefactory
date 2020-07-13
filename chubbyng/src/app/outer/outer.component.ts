import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner"; 
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.scss']
})
export class OuterComponent implements OnInit {
  emp: any;

  constructor(private SpinnerService: NgxSpinnerService,
              private APIService: ApiserviceService) { 
  }

  ngOnInit() {
    this.GetemployeeDetails();  
  }

  GetemployeeDetails() {  
    this.SpinnerService.show();
    this.APIService.GetemployeeDetails().subscribe((data: any) => {  
      this.emp = data;  
      console.log(this.emp);
      this.SpinnerService.hide();  
    });
  }

  onRefresh(){
    this.GetemployeeDetails();
  }
}
