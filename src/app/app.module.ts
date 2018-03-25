import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CareerHistoryComponent } from './career-history/career-history.component';
import { BannerComponent } from './banner/banner.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { PillsHtml5Component } from './pills/pills-html5/pills-html5.component';
import { PillsCss3Component } from './pills/pills-css3/pills-css3.component';
import { PillsJsComponent } from './pills/pills-js/pills-js.component';
import { PillsAngularComponent } from './pills/pills-angular/pills-angular.component';
import { PillsSpringComponent } from './pills/pills-spring/pills-spring.component';
import { PillsNodeJsComponent } from './pills/pills-node-js/pills-node-js.component';
import { PillsBootstrapComponent } from './pills/pills-bootstrap/pills-bootstrap.component';
import { PillsJavaComponent } from './pills/pills-java/pills-java.component';
import { PillsHtmlComponent } from './pills/pills-html/pills-html.component';
import { PillsCssComponent } from './pills/pills-css/pills-css.component';
import { PillsJqueryComponent } from './pills/pills-jquery/pills-jquery.component';
import { PillsFirebaseComponent } from './pills/pills-firebase/pills-firebase.component';
import { PillsPhpComponent } from './pills/pills-php/pills-php.component';
import { SkillsComponent } from './skills/skills.component';
import { CoursesComponent } from './courses/courses.component';
import { ProjectsMdComponent } from './projects-md/projects-md.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    CareerHistoryComponent,
    BannerComponent,
    ProfileComponent,
    ProjectsComponent,
    PillsHtml5Component,
    PillsCss3Component,
    PillsJsComponent,
    PillsAngularComponent,
    PillsSpringComponent,
    PillsNodeJsComponent,
    PillsBootstrapComponent,
    PillsJavaComponent,
    PillsHtmlComponent,
    PillsCssComponent,
    PillsJqueryComponent,
    PillsFirebaseComponent,
    PillsPhpComponent,
    SkillsComponent,
    CoursesComponent,
    ProjectsMdComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
