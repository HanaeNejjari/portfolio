import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { CompetencesComponent } from './components/competences/competences.component';
import { CompetenceDetailsComponent } from './competence-details/competence-details.component';

export const routes: Routes = [
  // Pages principales
  { path: '', component: HomeComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: 'competence/:id', component: CompetenceDetailsComponent },

  // Section projets
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:projectName', component: ProjectDetailsComponent },

  // Page contact
  { path: 'contact', component: ContactComponent },

  // Fallback : redirige toute route inconnue vers les compétences
  { path: '**', redirectTo: 'competences' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
