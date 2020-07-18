import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolRoutingModule } from './tool-routing.module';
import { ToolAboutComponent } from './tool-about/tool-about.component';
import { ToolFileComponent } from './tool-file/tool-file.component';
import { ToolEditComponent } from './tool-edit/tool-edit.component';
import { ToolCounterComponent } from './tool-counter/tool-counter.component';
import { AngularMaterialModule } from '../angular-material.module';


@NgModule({
  declarations: [ToolAboutComponent, ToolFileComponent, ToolEditComponent, ToolCounterComponent],
  imports: [
    CommonModule,
    ToolRoutingModule,
    AngularMaterialModule
  ]
})
export class ToolModule { }
