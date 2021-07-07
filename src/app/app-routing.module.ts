import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { NovoCursoComponent } from './novoCurso/novoCurso.component';
import { ConteudoComponent } from './conteudo/conteudo.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full', },
  {path: 'admin', component: AdminComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'novoCurso', component: NovoCursoComponent},
  {path: 'conteudo', component: ConteudoComponent},
  {path: 'login', component: LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
