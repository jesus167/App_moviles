import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  

  constructor(private router: Router) { }

  valido: boolean = false;

  canActivate(){
    if(this.valido){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }
  validarCredenciales(user, pass){
    if(user == 'admin' && pass == 'admin'){
      this.valido = true;
      this.router.navigate(['principal']);
    }else{
      return false;
    }
  }
}
