import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DbService } from 'src/app/services/db.service';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-restpass',
  templateUrl: './restpass.page.html',
  styleUrls: ['./restpass.page.scss'],
})
export class RestpassPage implements OnInit {
  mdl_user: string = '';
  mdl_newpass: string = '';

  constructor(private router: Router,
    private alertController: AlertController,
    private db: DbService,
    private login: LoginPage) { }

  ngOnInit() {
  }
  // //newPass(){

  //   if(this.login.mdl_user == this.mdl_user){
  //     this.db.validarCredenciales(this.mdl_user, this.mdl_newpass);
  //   }else{
  //     this.mostrarMensaje();
  //   }
  // }

  backlog(){
    this.router.navigate(['login'])
    
  }
  async mostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Usuario no corresponde!!',
      buttons: ['OK'],
    });
    await alert.present();
  }

}
