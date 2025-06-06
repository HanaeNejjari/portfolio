import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgForOf, NgIf } from '@angular/common';
import { ChartConfiguration, ChartData } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

interface Competence {
  id: string;
  name: string;
}

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss'],
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    NgChartsModule,
  ]
})
export class CompetencesComponent {
  constructor(private router: Router) {}

  selectedTechDescription: string | null = null;
  selectedHumanDescription: string | null = null;
  selectedLanguageDescription: string | null = null;

  competencesTechniques: Competence[] = [
    { id: 'angular', name: 'Angular' },         // 4/5
    { id: 'sql', name: 'SQL' },                 // 4/5
    { id: 'abap', name: 'ABAP' },               // 3/5
    { id: 'java-spring', name: 'Java (Spring Boot)' }, // 3/5
    { id: 'ux-ui', name: 'UX/UI' },             // 3/5
    { id: 'sap', name: 'SAP' }                  // 3/5
  ];

  competencesHumaines: Competence[] = [
    { id: 'communication', name: 'Communication' },           // 5/5
    { id: 'relation client', name: 'Relation client' },       // 5/5
    { id: 'agile', name: 'Agile' },                           // 4/5
    { id: 'management transversal', name: 'Management Transversal' }, // 4/5
    { id: 'gestion de projet', name: 'Gestion de projet' }    // 4/5
  ];

  languesParlees = [
    { name: '🇫🇷 Français', description: 'Langue maternelle, utilisée au quotidien et dans un cadre professionnel.' },
    { name: '🇬🇧 Anglais', description: 'Niveau avancé (B2/C1), utilisé pour la communication technique et professionnelle.' },
    { name: '🇪🇸 Espagnol', description: 'Niveau intermédiaire, capable de tenir une conversation et comprendre des documents.' },
    { name: '🇮🇹 Italien', description: 'Langue maternelle, utilisée au quotidien dans un cadre familial.' }
  ];

  radarChartData: ChartData<'radar'> = {
    labels: [
      'Angular', 'SQL', 'ABAP', 'Java (Spring Boot)', 'UX/UI', 'SAP',
      'Communication', 'Relation client', 'Agile', 'Management Transversal', 'Gestion de projet'
    ],
    datasets: [
      {
        label: 'Niveau de compétence',
        data: [4, 4, 3, 3, 3, 3, 5, 5, 4, 4, 4],
        fill: true,
        backgroundColor: 'rgba(102, 126, 234, 0.2)',
        borderColor: '#667eea',
        pointBackgroundColor: '#764ba2'
      }
    ]
  };

  radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: true,
    elements: {
      line: {
        borderWidth: 2
      }
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 5,
        min: 0,
        ticks: {
          stepSize: 1,
          color: '#333'
        },
        pointLabels: {
          font: {
            size: 12
          }
        }
      }
    }
  };

  radarChartType: 'radar' = 'radar';

  goToCompetenceDetails(name: string) {
    const id = name.toLowerCase();
    this.router.navigate(['/competence', id]);
  }

  selectTech(competence: { description: string }) {
    this.selectedTechDescription = competence.description;
    this.selectedHumanDescription = null;
    this.selectedLanguageDescription = null;
  }

  selectHuman(competence: { description: string }) {
    this.selectedHumanDescription = competence.description;
    this.selectedTechDescription = null;
    this.selectedLanguageDescription = null;
  }

  selectLanguage(language: { description: string }) {
    this.selectedLanguageDescription = language.description;
    this.selectedTechDescription = null;
    this.selectedHumanDescription = null;
  }
}
