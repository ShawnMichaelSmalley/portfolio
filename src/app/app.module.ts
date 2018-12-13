import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ResumeComponent } from './resume/resume.component';
import { UserInterfacesComponent } from './user-interfaces/user-interfaces.component';
import { LogoDesignComponent } from './logo-design/logo-design.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,

    ResumeComponent,
    UserInterfacesComponent,
    LogoDesignComponent,
    MediaComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'resume', pathMatch: 'full'},
      { path: 'resume', component: ResumeComponent },
      { path: 'user-interfaces', component: UserInterfacesComponent },
      { path: 'logo-design', component: LogoDesignComponent },
      { path: 'media', component: MediaComponent },
      { path: 'contact', component: ContactComponent }
    ]),
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
