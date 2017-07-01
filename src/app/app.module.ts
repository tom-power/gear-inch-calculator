import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {KeysPipe} from "./utils/keys.pipe";
import {RouterModule, Routes} from "@angular/router";

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
