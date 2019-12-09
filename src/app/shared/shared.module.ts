import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalSearchComponent } from './modal-search/modal-search.component';
import { ModalModule } from 'ngx-modialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    FormsModule
  ],
  declarations: [ModalSearchComponent],
  exports:[ModalSearchComponent],
  entryComponents:[ModalSearchComponent]
})
export class SharedModule { }
