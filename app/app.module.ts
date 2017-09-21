import { NgModule }     from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { KegListComponent } from './keg-list.component';
import { EditKegComponent } from './edit-keg.component';
import { NewKegComponent } from './new-keg.component';
import { PintsRemainingPipe } from './pintsRemaining.pipe';
import { KegStylePipe } from './kegStyle.pipe';
import { DatePipe } from '@angular/common';
import {DatePipeComponent} from './date-time.component';
import { TillIncomeComponent } from './till-income.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, KegListComponent, EditKegComponent, NewKegComponent, PintsRemainingPipe, KegStylePipe, DatePipeComponent, TillIncomeComponent],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
