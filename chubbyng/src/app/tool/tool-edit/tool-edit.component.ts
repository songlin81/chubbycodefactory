import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tool-edit',
  templateUrl: './tool-edit.component.html',
  styleUrls: ['./tool-edit.component.scss']
})
export class ToolEditComponent implements OnInit {

  uploadedFiles: Array<File> ;
  fileName;
  result;

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  fileChange(element) {
    this.result="";
    this.uploadedFiles = element.target.files;
    this.fileName=element.target.files[0].name;
  }

  upload() {
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    this.http.post('http://localhost:5000/api/upload', formData, {
        headers: {'Content-Type': 'multipart/form-data'}
      })
        .subscribe((response) => {
          this.result=`response received is: ${response["message"]}.`;
          console.log(response);
        })
    this.fileName="";
  }
}