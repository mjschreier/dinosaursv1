import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobFormComponent } from './components/job-form/job-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListService } from './services/list.service';
import { ReversePipe } from './pipes/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JobListComponent,
    JobFormComponent,
    FooterComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
