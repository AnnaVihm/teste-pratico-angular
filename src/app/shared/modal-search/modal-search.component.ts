import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-search',
  templateUrl: './modal-search.component.html',
  styleUrls: ['./modal-search.component.css']
})
export class ModalSearchComponent implements OnInit {

  @Input() list : any[] = [];
  @Output() saveEvent = new EventEmitter;
  @Output() modalClose = new EventEmitter;
  form:FormGroup
  endereco:any;
  
  constructor() { }

  ngOnInit() {}

  close(){
    this.modalClose.emit(true)
  }

  save(){
    this.saveEvent.emit(this.endereco)
  }

}
