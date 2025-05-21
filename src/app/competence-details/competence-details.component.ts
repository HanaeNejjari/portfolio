import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-competence-details',
  templateUrl: './competence-details.component.html',
  imports: [
    CommonModule,
    RouterLink
  ],
  styleUrls: ['./competence-details.component.scss']
})
export class CompetenceDetailsComponent implements OnInit {
  competenceId!: string;
  competenceName = '';
  competenceDescription = '';
  formattedDescription = '';
  relatedProjects: string[] = [];
  image: string = '';
  competenceDetails: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.competenceId = this.route.snapshot.paramMap.get('id') || '';

    this.http.get<any[]>('assets/competences.json').subscribe(data => {
      const competence = data.find(c => c.id === this.competenceId);
      if (competence) {
        this.competenceName = competence.title;
        this.competenceDescription = competence.description;
        this.formattedDescription = this.formatDescription(competence.description);
        this.relatedProjects = competence.projetsAssocies || [];
        this.image = competence.image;
        this.competenceDetails = competence;
      }
    });
  }

  private formatDescription(text: string): string {
    return text
      .split('\n')
      .map((line: string) => `<p>${line.trim()}</p>`)
      .join('');
  }
}
