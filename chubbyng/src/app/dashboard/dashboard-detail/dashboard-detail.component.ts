import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.scss']
})
export class DashboardDetailComponent implements OnInit {

  detailId: string;

  constructor(private route: ActivatedRoute) { 
    route.params.subscribe(params => { this.detailId = params['configId']; });
  }

  ngOnInit() {
  }
}
