import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  
  usuario: string = 'admin';
  contrasena: string = 'admin';
  valido: boolean = false;

  constructor(private router: Router) { }

  canActivate(){
    if(this.valido){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }
  validarCredenciales(user, pass){
    if(user === this.usuario && pass === this.contrasena){
      this.valido = true;
      this.router.navigate(['principal']);
      return true;
    }else{
      return false;
    }
  }
}
