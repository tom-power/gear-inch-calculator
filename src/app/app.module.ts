import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {KeysPipe} from './utils/keys.pipe';
import {RouterModule, Routes} from '@angular/router';
import {LinkService} from './service/link.service';
import {FormService} from './service/form.service';
import {UpdateService} from './service/update.service';
import {FormBuilderService} from './service/form.builder.service';
import {CalculateService} from './service/calculate.service';
import {GearInchMapService} from './service/gear.inch.map.service';

const appRoutes: Routes = [
  {path: '*', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    KeysPipe
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    UpdateService,
    FormService,
    FormBuilderService,
    LinkService,
    CalculateService,
    GearInchMapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
