import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { AppSettings } from '../../../config/appsettings';

@Component({
  selector: 'app-tool-edit',
  templateUrl: './tool-edit.component.html',
  styleUrls: ['./tool-edit.component.scss']
})
export class ToolEditComponent implements OnInit {

  uploadedFiles: Array<File> ;
  fileName;
  result;

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  public uploader: FileUploader = new FileUploader({
    url: AppSettings.uploaderUrl,
    itemAlias: 'image'
  });

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, status: any) => {
      console.log('Uploaded File Details:', item);
      this.toastr.success('File successfully uploaded!');
      this.uploader.clearQueue();
    };
   }

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
    this.http.post(AppSettings.uploadUrl, formData, {
        headers: {'Content-Type': 'multipart/form-data'}
      })
        .subscribe((response) => {
          this.result=`response received is: ${response["message"]}.`;
          console.log(response);
        })
    this.fileName="";
  }
}