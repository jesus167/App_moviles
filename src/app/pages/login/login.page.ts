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
    let valido = this.db.validarCredenciales(this.mdl_user, this.mdl_pass);
    if(!valido){
      this.mostrarMensaje();
    }
  }

  recupera(){
    this.router.navigate(['restpass'])
  }
  async mostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Usuario o Contraseña incorrectos!!',
      buttons: ['OK'],
    });
    await alert.present();
  }
}




