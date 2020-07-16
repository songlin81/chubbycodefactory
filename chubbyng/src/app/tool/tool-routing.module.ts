import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolAboutComponent } from './tool-about/tool-about.component';
import { ToolFileComponent } from './tool-file/tool-file.component';
import { ToolEditComponent } from './tool-edit/tool-edit.component';

const routes: Routes = [
  { path : "about", component : ToolAboutComponent },
  { path : "file", component : ToolFileComponent },
  { path : "edit", component : ToolEditComponent },
  { path : "", redirectTo : "file" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolRoutingModule { }
