import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  constructor(private alerCtrl: AlertController) { }

  ngOnInit() {
  }
  async FullClick() {
    const alert = await this.alerCtrl.create({
        backdropDismiss: false,
        header: 'Mensaje',
        
        message: 'Guardado correctamente!',
        buttons: ['ok']
  });
  await alert.present();
};

}
