import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { ModelComponent } from './model/model.component';
import { ViewComponent } from './view/view.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ManufacturerComponent,
    ModelComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: "", redirectTo:"manufacturer", pathMatch:"full"},
      {path:"manufacturer", component: ManufacturerComponent},
      {path:"model", component: ModelComponent},
      {path:"view", component: ViewComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
