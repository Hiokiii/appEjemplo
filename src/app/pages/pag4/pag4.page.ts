import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pag4',
  templateUrl: './pag4.page.html',
  styleUrls: ['./pag4.page.scss'],
})
export class Pag4Page implements OnInit {

  constructor(private alertController:AlertController) { }

  ngOnInit() {
  }

    async presentAlert() {
      const alert = await this.alertController.create({
        //cssClass: 'my-custom-class',
        header: 'Alerta Simple',
        subHeader: 'Ejemplo de Alerta',
        message: 'Este es el mensaje de la alerta.',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Ok',
            handler: () => {
              console.log('Confirm Okay');
            }
          }
        ]
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
}
