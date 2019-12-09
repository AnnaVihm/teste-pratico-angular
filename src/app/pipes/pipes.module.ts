import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortByPipe } from './sortByPipe .pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SortByPipe
  ],
  exports:[SortByPipe]
})
export class PipesModule { }
