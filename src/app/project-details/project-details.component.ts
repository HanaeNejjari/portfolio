import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  year?: string;
  image?: string;
  competencesAssociees?: string[];
}

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class ProjectDetailsComponent implements OnInit {
  projectId: string | null = null;
  projectDetails: Project | null = null;


  constructor(private route: ActivatedRoute, private http: HttpClient,private location: Location ) {}
goBack(): void {
    this.location.back();
}
  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('projectName');
    console.log('ID dans l’URL =', this.projectId);

    this.http.get<Project[]>('assets/projects.json').subscribe(projects => {
      console.log('Données JSON chargées =', projects); // 🔍 Log de contrôle
      this.projectDetails = projects.find(p => p.id === this.projectId) || null;

      if (!this.projectDetails) {
        console.warn('Projet non trouvé avec ID :', this.projectId); // 🔍
      }
    });
  }
}
