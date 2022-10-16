import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(private router: Router,
    private alertController: AlertController,
    private db: DbService) { }
  
  mdl_user: string='';
  mdl_pass: string='';

  ngOnInit() {
  }
  navegar(){
    let validar = this.db.validarCredenciales(this.mdl_user, this.mdl_pass);
    if(!validar){
      this.mostrarMensaje();
      console.log(validar);
    }else{
      this.mensajeBienvenida();
      console.log(validar);
    }
  }

  reestablecer(){
  this.router.navigate(['restartpass']);
  }
  async mostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Usuario o Contraseña incorrectos!!',
      buttons: ['OK'],
    });
    await alert.present();
  }
  async mensajeBienvenida() {
    const alert = await this.alertController.create({
      message: 'Bienvenido!!',
      buttons: ['OK'],
    });
    await alert.present();
  }
}




