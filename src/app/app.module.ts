import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

import { RecordsService } from './records.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { ReversepipePipe } from './reversepipe.pipe';
import { RedblackDirective } from './redblack.directive';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    DataComponent,
    ReversepipePipe,
    RedblackDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    RouterModule.forRoot([
      {
        path: 'data', // localhost:4200/data
        component: DataComponent
      },
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
