import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShipperDetailsComponent } from './shipper-details/shipper-details.component';
import { ShipperDetailComponent } from './shipper-details/shipper-detail/shipper-detail.component';
import { ShipperDetailListComponent } from './shipper-details/shipper-detail-list/shipper-detail-list.component';

import { HttpClientModule } from '@angular/common/http';
import { ShipperDetailService } from './shared/shipper-detail.service';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ShipperDetailsComponent,
    ShipperDetailComponent,
    ShipperDetailListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ShipperDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
