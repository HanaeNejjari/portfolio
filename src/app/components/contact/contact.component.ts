import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit() {
    if (this.name && this.email && this.message) {
      alert(`Merci ${this.name}, votre message a bien été envoyé ! 📩`);
      this.name = '';
      this.email = '';
      this.message = '';
    } else {
      alert('Veuillez remplir tous les champs avant d\'envoyer.');
    }
  }

}
