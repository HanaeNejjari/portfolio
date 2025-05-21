import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

interface Competence {
  id: string;
  name: string;
}

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent {
  constructor(private router: Router) {}
  selectedTechDescription: string | null = null;
  selectedHumanDescription: string | null = null;
  selectedLanguageDescription: string | null = null;

  competencesTechniques: Competence[] = [
    { id: 'angular', name: 'Angular' },
    { id: 'abap', name: 'ABAP' },
    { id: 'java-spring', name: 'Java (Spring Boot)' },
    { id: 'sql', name: 'SQL' },
    { id: 'ux-ui', name: 'UX/UI' },
    { id: 'sap', name: 'SAP' }

  ];

  competencesHumaines: Competence[] = [
    { id: 'méthodologie agile/scrum', name: 'Agile' },
    { id: 'management-transversal', name: 'Management Transversal' },
    { id: 'gestion-de-projet', name: 'Gestion de projet' },
    { id: 'communication', name: 'Communication' },
    { id: 'relation-client', name: 'Relation client' }
  ];

  languesParlees = [
    { name: '🇫🇷 Français', description: 'Langue maternelle, utilisée au quotidien et dans un cadre professionnel.' },
    { name: '🇬🇧 Anglais', description: 'Niveau avancé (B2/C1), utilisé pour la communication technique et professionnelle.' },
    { name: '🇪🇸 Espagnol', description: 'Niveau intermédiaire, capable de tenir une conversation et comprendre des documents.' },
    { name: '🇮🇹 Italien' , description: 'Langue maternelle, utilisée au quotidien dans un cadre familial.'}

  ];

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
