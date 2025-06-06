import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatCardTitle,
    MatCard,
    MatCardContent,
    MatCardActions,
    MatButton,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // ✅ Déclaré correctement dans la classe
  parcours = [
    {
      date: '2024 - Aujourd’hui',
      titre: 'Alternante Consultante technique SAP',
      sousTitre: 'DELOITTE',
      logo: 'assets/logos/deloitte.jpeg',
      description:
        "Lors de ma deuxième année d'alternance au sein de l'entreprise DELOITTE (acteur mondial de référence en Audit & Assurance, Consulting et Juridique et Fiscal), j'ai pu assurer des missions techniques sur le progiciel SAP (Systemanalyse Programmentwicklung). Ces missions comprenaient le développement de programmes, de l'amélioration continue, des tests,etc.).",
      competences: [
        { label: 'SAP', route: '/competence/sap' },
        { label: 'ABAP', route: '/competence/abap' },
        { label: 'UX/UI', route: '/competence/ux-ui' },
        { label: 'Management Transversal', route: '/competence/management transversal' },
        { label: 'Gestion De Projet', route: '/competence/gestion de projet' },
        { label: 'Relation Client', route: '/competence/relation client' },
        { label: 'Communication', route: '/competence/communication' }
      ],
      projets: [
        { label: 'Cockpit SAP', route: '/projects/cockpit' },
        { label: 'ZFB47', route: '/projects/zfb47' }
      ]
    },

    {
      date: '2023 - 2024',
      titre: 'Alternante Consultante fonctionnelle SAP',
      sousTitre: 'ACSSI',
      logo: 'assets/logos/acssi.jpeg',
      description:
        "Lors de ma première année d'alternance au sein de l'ESN (Entreprise de services du numérique) ACSSI, j'ai pu assurer des missions fonctionnelles sur le progiciel SAP (Systemanalyse Programmentwicklung), mes missions et tâches comprenaient le suivi des incidents, la gestion des erreurs, la communication client, la coordination entre les développeurs et les cleints, etc.).",
      competences: [
        { label: 'SAP', route: '/competence/sap' },
        { label: 'ABAP', route: '/competence/abap' },
        { label: 'Communication', route: '/competence/communication' },
      ],
      projets: [
        { label: 'IDOCS', route: '/projects/gestion d\'idocs' }
      ]
    },
    {
      date: '2023 - 2025',
      titre: 'Formation Expert en Ingénierie Logicielle',
      sousTitre: 'ISCOD',
      logo: 'assets/logos/iscod.jpeg',
      description:
       "Le master en ingénierie du logiciel allie compétences techniques avancées (programmation, architecture, sécurité) à une maîtrise des méthodes de gestion de projet et d’outils collaboratifs.\n",
      competences: [
        { label: 'Angular', route: '/competence/angular' },
        { label: 'Java', route: '/competence/java-spring' },
        { label: 'SQL', route: '/competence/sql' },
        { label: 'UX/UI', route: '/competence/ux-ui' },
        { label: 'Management Transversal', route: '/competence/management transversal' },
        { label: 'Agile', route: '/competence/agile' },
        { label: 'Gestion De Projet', route: '/competence/gestion de projet' },
        { label: 'Communication', route: '/competence/communication' },
        { label: 'Relation Client', route: '/competence/relation client' }
      ],
      projets: [
        { label: 'Portfolio', route: '/projects/portfolio' },
        { label: 'Project Management Tool', route: '/projects/project management tool' }
      ]
    },

    {
      date: '2020 - 2023',
      titre: 'Licence  LLCER Espagnol (langues, littératures et civilisations étrangères et régionales)',
      sousTitre: 'Université Charles de Gaulle - Lille III',
      logo: 'assets/logos/univ.png',
      description:
        "Après trois annèes d'études, en 2023, j'ai obtenu ma licence LLCER Espagnol."
    },

    {
      date: '2017 - 2020',
      titre: 'Bac économique et social / Bachibac - Spécialité Mathématiques',
      sousTitre: 'Lycée Fernand Darchicourt',
      logo: 'assets/logos/fd.jpeg',
      description:
        "J'ai obtenu mon bac ES, spécialité mathématiques en 2020, avec mention bien. Mon cursus était double, en effet, j'ai aussi obtenu un double bac espagnol (Bachibac)."
    }
  ];
}
