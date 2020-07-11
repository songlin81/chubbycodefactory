import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  project:Object;
  originalName;
  originalCalories;

  constructor(public dialogRef:MatDialogRef<PopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data
  ) { 
    if(data!=undefined){
      this.originalName=data.name || '';
      this.originalCalories=data.calories || '';
    }
  }

  ngOnInit() {
    this.project = this.data||{};
  }

  onNoClick(){
    Object.defineProperty(this.project, "name", {value: this.originalName});
    Object.defineProperty(this.project, "calories", {value: this.originalCalories});
    this.dialogRef.close();
  }
}
