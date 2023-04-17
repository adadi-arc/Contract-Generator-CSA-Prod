import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/base/theme.service';

@Component({
  selector: 'app-my-heading',
  templateUrl: './my-heading.component.html',
  styleUrls: ['./my-heading.component.scss']
})
export class MyHeadingComponent implements OnInit {

  @Input() heading:string ="";
  @Output() onClick:any = new EventEmitter()

  constructor(public theme:ThemeService , public Route : Router) { }

  ngOnInit(): void {
  }
  openList(){
    this.onClick.emit(true)
  }

}
