import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MaterialModule } from '../material/material.module';
import { IconModule } from '../icon/icon.module';


@NgModule({
  declarations: [
    LayoutPageComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    PortafolioRoutingModule,

    MaterialModule,
    IconModule
  ]
})
export class PortafolioModule { }
