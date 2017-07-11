import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {LinkService} from 'app/core/service/link.service';
import {FormService} from 'app/core/service/form.service';
import {UpdateService} from 'app/core/service/update.service';
import {FormBuilderService} from 'app/core/service/form.builder.service';
import {CalculateService} from 'app/core/service/calculate.service';
import {GearInchMapService} from 'app/core/service/gear.inch.map.service';
import {FormComponent} from './form/form.component';
import {OutputComponent} from './output/output.component';

const appRoutes: Routes = [
  {path: '*', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    OutputComponent
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
