import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { MathSqrtPipe } from './pipes/math-sqrt.pipe';
import { ChangeTextDirective } from './directives/change-text.directive';
import { OuterComponent } from './outer/outer.component';
import { NgxSpinnerModule } from "ngx-spinner";

import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { appReducers } from './store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
import { UserService } from './services/user.service';
import { CacheInterceptor } from './http-interceptors/cache-interceptor';
import { ConfigEffects } from './store/effects/config.effects';
import { ToolComponent } from './tool/tool.component';

import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './login/login.component';
export function tokenGetter() {
  return localStorage.getItem('access_token');
}
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ToastrModule } from 'ngx-toastr';
import { CountingDirective } from './directives/counting.directive';
import { ExeHighlightDirective } from './directives/exe-highlight.directive';
import { ExeButtonPressDirective } from './directives/exe-button-press.directive';

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
    OuterComponent,
    ToolComponent,
    LoginComponent,
    CountingDirective,
    ExeHighlightDirective,
    ExeButtonPressDirective
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
    ReactiveFormsModule,
    NgxSpinnerModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, ConfigEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:5000'],
        disallowedRoutes: ['localhost:5000/api/auth']
      }
    }),
    FlexLayoutModule,
    ToastrModule.forRoot()
  ],
  providers: [
    VersionserviceService, 
    PathResolveService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents:[PopupComponent]
})
export class AppModule { }
