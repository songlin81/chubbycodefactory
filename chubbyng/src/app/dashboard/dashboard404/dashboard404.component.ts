import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard404',
  templateUrl: './dashboard404.component.html',
  styleUrls: ['./dashboard404.component.scss']
})
export class Dashboard404Component implements OnInit {

  path: string;
  pathRender: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.pipe(take(1))
    .subscribe((data: { path: string }) => {
      console.log(data);
      this.path = data.path;
      this.pathRender = data.path.substring(1);
    });
  }

}
