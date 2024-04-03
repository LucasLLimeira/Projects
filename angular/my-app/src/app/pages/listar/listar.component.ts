import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {
  constructor(){ }

  nome:string = "Lucas Limeira";
  ngOnInit(): void {}
   
}
