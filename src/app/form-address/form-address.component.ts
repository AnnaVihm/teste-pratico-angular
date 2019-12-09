import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AddressService } from '../services/address.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-form-address',
  templateUrl: './form-address.component.html',
  styleUrls: ['./form-address.component.css']
})
export class FormAddressComponent implements OnInit {

  form:FormGroup;
  enderecos:any;
  private modalRef: NgbModalRef;

  constructor(private formBuild : FormBuilder,
              private adressService : AddressService,
              private modalService : NgbModal,
              private alertService: AlertService) { }

  ngOnInit() {
    this.getForm();
    
  }

  getForm(){
    this.form = this.formBuild.group({
      endereco : new FormControl(null, Validators.required),
      uf: new FormControl("CE", Validators.required),
      cidade: new FormControl("Fortaleza", Validators.required),
      cep: new FormControl(null, Validators.required),
      bairro: new FormControl(null, Validators.required),
      ibge: new FormControl(null, Validators.required),
      complemento: new FormControl(null)
    })
  }

  buscarCep(endereco:any, modal : TemplateRef<any>){
    let uf = this.form.get('uf').value;
    let cidade = this.form.get('cidade').value;
    this.adressService.pesquisaPorCep(uf,cidade,endereco).subscribe(data =>{
      this.enderecos = data;
      if(data.length > 1){
        this.modalRef = this.modalService.open(modal, { size: 'lg' });
      }else if(data.length == 1){
        this.form.get('bairro').setValue(this.enderecos[0].bairro)
        this.form.get('cep').setValue(this.enderecos[0].cep)
        this.form.get('ibge').setValue(this.enderecos[0].ibge)
        this.form.get('complemento').setValue(this.enderecos[0].complemento)
      }else{
        this.alertService.info('Nenhum endereço encontrado!');
      }
    })
  }

  onSave(value){
    this.form.get('bairro').setValue(value.bairro)
    this.form.get('cep').setValue(value.cep)
    this.form.get('ibge').setValue(value.ibge)
    this.form.get('complemento').setValue(value.complemento)

    this.modalRef.close();
  }

  closeModal(){
    this.modalRef.close();
  }

  register(){
    this.alertService.success('Cadastrado com sucesso.');
    this.getForm();
  }

  cancel(){
    this.getForm();
  }

}
