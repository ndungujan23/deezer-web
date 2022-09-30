import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Components
import { TopbarComponent } from './components/topbar/topbar.component';

// Services
import { DocumentTitleService } from './services/document-title.service';
import { RestfulService } from './services/restful.service';


@NgModule({
  declarations: [
    TopbarComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
  ],
  exports: [
    TopbarComponent,
  ],
  providers: [
    DocumentTitleService,
    RestfulService,

    Title,
  ]
})
export class SharedModule { }
