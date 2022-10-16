import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  
  nuevacontrasena: string = '';
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
    if(user === this.usuario){
    
      if (this.contrasena == pass || this.nuevacontrasena == pass){
        this.valido = true;
        this.router.navigate(['principal']);
        return true;

      }else if(this.contrasena == pass)
      {
        this.valido = true;
        this.router.navigate(['principal']);
        return true;
      }else if (this.nuevacontrasena== pass){
        this.valido = true;
        this.router.navigate(['principal']);
        return true;
      }
    }else{
      return false;
    }
  }

  RestablecerCredenciales(user,pass){
    if(this.usuario == user ){

      this.nuevacontrasena == pass;
      this.contrasena= pass;

        return true;     

    }else{
      return false;
    }
  }
}
