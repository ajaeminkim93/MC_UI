import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from '../homepage/homepage.component';



@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule
  ],
  exports: [HomepageComponent]
})
export class HomepageModule { }
