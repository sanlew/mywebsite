import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project/project.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const projectsRoutes: Routes = [
  { path: 'projects', component: ProjectsComponent , children: [

    { path: ':id/:name', component: ProjectComponent },

     ] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(projectsRoutes)
  ],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
