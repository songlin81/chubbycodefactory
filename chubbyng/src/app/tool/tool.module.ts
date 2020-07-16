import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolRoutingModule } from './tool-routing.module';
import { ToolAboutComponent } from './tool-about/tool-about.component';
import { ToolFileComponent } from './tool-file/tool-file.component';
import { ToolEditComponent } from './tool-edit/tool-edit.component';
import { ToolCounterComponent } from './tool-counter/tool-counter.component';


@NgModule({
  declarations: [ToolAboutComponent, ToolFileComponent, ToolEditComponent, ToolCounterComponent],
  imports: [
    CommonModule,
    ToolRoutingModule
  ]
})
export class ToolModule { }
