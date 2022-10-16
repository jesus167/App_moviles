import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-restartpass',
  templateUrl: './restartpass.page.html',
  styleUrls: ['./restartpass.page.scss'],
})
export class RestartpassPage implements OnInit {

  mdl_user: string = '';
  new_mdl_pass: string = '';
  valida_mdl_pass: string = '';

  constructor(private router: Router,
              private alertController: AlertController,
              private db: DbService) { }

  ngOnInit() {
  }
  cambia(){
    if(this.mdl_user == this.db.usuario){
      if(this.new_mdl_pass == this.valida_mdl_pass){
        this.db.nuevacontrasena = this.new_mdl_pass
        this.db.RestablecerCredenciales(this.mdl_user, this.new_mdl_pass);
        this.router.navigate(['login'])
        this.mostrarMensaje();
      }else{
        this.mensajeError();
      }
    }else{
        this.mensajeError2();
    }
  }

  async mostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Su contraseña a sido actualizada correctamente',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async mensajeError() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Las contraseñas ingresadas no son iguales!!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async mensajeError2() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Usuario no valido!!',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
