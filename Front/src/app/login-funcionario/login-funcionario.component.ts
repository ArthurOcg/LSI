import { Router } from '@angular/router';
import { Usuario } from './../models/usuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-funcionario',
  templateUrl: './login-funcionario.component.html',
  styleUrls: ['./login-funcionario.component.css']
})
export class LoginFuncionarioComponent implements OnInit {

  usuario: Usuario = new Usuario();

  usuarios = [
    {
      nome:'funcionario1',
      email:'funcionario1@email1.com',
      senha:'123456'
    },
    {
      nome:'funcionario2',
      email:'funcionario2@email2.com',
      senha:'123456'
    }
  ]

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    for (let i = 0; i < this.usuarios.length; i++) {
      if(this.usuario.email === this.usuarios[i].email && this.usuario.senha === this.usuarios[i].senha){
        this.router.navigate(['/lista-aluno-funcionario'])
      }
    }
  }

}
