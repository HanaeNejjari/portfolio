import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {CommonModule, NgOptimizedImage} from '@angular/common';

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
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // ✅ Déclaré correctement dans la classe
  parcours = [
    {
      date: '2023 - Aujourd’hui',
      titre: 'Alternante Consultante technico-fonctionnelle SAP',
      sousTitre: 'ACSSI - DELOITTE',
      description:
        "Lors de mes deux années d'alternance, j'ai pu assurer des missions techniques (développement de programmes, amélioration continue, tests,etc.), ainsi que des missions fonctionnelles (suivi des incidents, gestion d’erreurs, communication client, coordination développeurs, etc.)."
    },
    {
      date: '2023 - 2025',
      titre: 'Formation Expert en Ingénierie Logicielle',
      sousTitre: 'ISCOD',
      description:
       "Le master en ingénierie du logiciel allie compétences techniques avancées (programmation, architecture, sécurité) à une maîtrise des méthodes de gestion de projet et d’outils collaboratifs.\n"
    },

    {
      date: '2020 - 2023',
      titre: 'Licence  LLCER Espagnol (langues, littératures et civilisations étrangères et régionales)',
      sousTitre: 'Université Charles de Gaulle - Lille III',
      description:
        "Après trois annèes d'études, en 2023, j'ai obtenu ma licence LLCER Espagnol."
    },

    {
      date: '2017 - 2020',
      titre: 'Bac économique et social / Bachibac - Spécialité Mathématiques',
      sousTitre: 'Lycée Fernand Darchicourt',
      description:
        "J'ai obtenu mon bac ES, spécialité mathématiques en 2020, avec mention bien. Mon cursus était double, en effet, j'ai aussi obtenu un double bac espagnol (Bachibac)."
    }
  ];
}
