import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {LinkService} from 'app/shared/service/link.service';
import {FormService} from 'app/shared/service/form.service';
import {UpdateService} from 'app/shared/service/update.service';
import {FormBuilderService} from 'app/shared/service/form.builder.service';
import {CalculateService} from 'app/shared/service/calculate.service';
import {GearInchMapService} from 'app/shared/service/gear.inch.map.service';
import {FormComponent} from './components/form/form.component';
import {OutputComponent} from './components/output/output.component';

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
