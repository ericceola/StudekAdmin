import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CursosComponent } from './cursos/cursos.component';
import { NovoCursoComponent } from './novoCurso/novoCurso.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { FileUploadModule } from '@iplab/ngx-file-upload';
//import { ImageUploaderComponent } from 'angular-file-uploader';

@NgModule({
  declarations: [							
    AppComponent,
      AdminComponent,
      LoginComponent,
      CursosComponent,
      NovoCursoComponent,
      ConteudoComponent
      //ImageUploaderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    FileUploadModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
