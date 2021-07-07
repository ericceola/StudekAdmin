import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('ngIfAnimation', [
      transition(':enter, :leave', [
        query('@*', animateChild())
      ]),
      transition('void => *', [
          style({
              opacity: 0
          }),
          animate("1500ms ease-in", style({
              opacity: 1
          }))
      ]),
      transition('* => void', [
          style({
              opacity: 1
          }),
          animate("1500ms ease-in", style({
              opacity: 0
          }))
        ])
    ]),
   
  ]
  })
export class LoginComponent implements OnInit {

  show:boolean = false; 

  constructor(private router: Router) { }

  


  ngOnInit() {
  }

  newChange() {
    this.router.navigateByUrl('/admin');
}

  toggle() {
    this.show = !this.show;
  }

}
