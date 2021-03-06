import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarBsComponent } from './components/navbar-bs/navbar-bs.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ElementChangingDirective } from './directives/element-changing.directive';
import { MouseoverColorDirective } from './directives/mouseover-color.directive';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    NavbarBsComponent,
    HomeComponent,
    NotFoundComponent,
    ElementChangingDirective,
    MouseoverColorDirective,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([])
  ],
  exports: [
    NavbarBsComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    ElementChangingDirective,
    MouseoverColorDirective
  ],
})
export class CoreModule { }
