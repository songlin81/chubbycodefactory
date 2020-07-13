import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FooterComponent } from './footer/footer.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
import { VersionserviceService } from './services/versionservice.service';
import { AccountsComponent } from './accounts/accounts.component';
import { PersonComponent } from './person/person.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PathResolveService } from './PathResolveService';
import { PopupComponent } from './popup/popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { MathSqrtPipe } from './pipes/math-sqrt.pipe';
import { ChangeTextDirective } from './directives/change-text.directive';
import { OuterComponent } from './outer/outer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    AccountsComponent,
    PersonComponent,
    NotFoundComponent,
    PopupComponent,
    MathSqrtPipe,
    ChangeTextDirective,
    OuterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    VersionserviceService, 
    PathResolveService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents:[PopupComponent]
})
export class AppModule { }
