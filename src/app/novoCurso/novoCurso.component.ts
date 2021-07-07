import { Component, OnInit } from '@angular/core';
//import { ImageUploaderComponent } from './image-uploader.component';


@Component({
  selector: 'app-novoCurso',
  templateUrl: './novoCurso.component.html',
  styleUrls: ['./novoCurso.component.css'],
  //directives: [ImageUploaderComponent]
})
export class NovoCursoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fileToUpload!: any;
  imageUrl!: any;
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);

}
}
