import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit {

  showFiller = false;

  constructor() { }

  ngOnInit() {
  }
 
}
