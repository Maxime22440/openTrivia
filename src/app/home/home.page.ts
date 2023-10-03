import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pseudo: string = '';
  difficulty: string = 'Easy';
  listDifficulties: string[] = ['Easy', 'Medium', 'Hard'];
  saveInfos: boolean = false;
  nextQuestion: boolean = false;
  begin: boolean = false;

  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController) {}

  async beginGame() {
    if (this.pseudo.length < 3) {
      const alert = await this.alertCtrl.create({
        header: 'Information Manquante',
        message: 'Veuillez rentrer un pseudo de 3 caractères minimum.',
        buttons: ['OK']
      });
      alert.present();
    } else {
      this.begin = true;
    }
  }

  checkAnswer(answer: string) {
    this.showToast(answer);
    this.nextQuestion = true;
  }

  async showToast(text: string) {
    const toast = await this.toastCtrl.create({
      message: text,
      position: 'bottom',
      duration: 4000
    });
    toast.present();
  }
}
