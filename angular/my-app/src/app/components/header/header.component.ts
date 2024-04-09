import { NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor() { }

  @Input() nome:string = "";
  ngOnInit(): void {
    
  }
}
