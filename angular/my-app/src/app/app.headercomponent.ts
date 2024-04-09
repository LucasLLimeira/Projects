// Exemplo: Se você não tem um módulo específico, crie um novo (ex: header.module.ts)

import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent // Declare o AppHeaderComponent aqui
  ],
  exports: [
    HeaderComponent // Exporte o AppHeaderComponent, se necessário
  ]
})
export class HeaderModule { }
