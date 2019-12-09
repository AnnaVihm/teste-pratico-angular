import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-search',
  templateUrl: './modal-search.component.html',
  styleUrls: ['./modal-search.component.css']
})
export class ModalSearchComponent implements OnInit {

  @Input() list : any[] = [];
  @Output() saveEvent = new EventEmitter;
  @Output() modalClose = new EventEmitter;

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
