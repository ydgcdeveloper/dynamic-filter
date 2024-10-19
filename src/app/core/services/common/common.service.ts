import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private toastController: ToastController) { }

  async presentErrorToast(message: string, duration = 3000) {
    const toast = await this.toastController.create({
      message,
      duration,
      icon: 'alert-circle-outline',
      position: 'top'
    });
    toast.present();
  }
}
