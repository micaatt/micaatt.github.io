import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';

const components = [
  HeaderNavComponent,
  FooterNavComponent
]

@NgModule({
  declarations: [ ...components, HeaderNavComponent, FooterNavComponent ],
  imports: [
    CommonModule
  ],
  exports: [ ...components ]
})
export class SharedModule { }
