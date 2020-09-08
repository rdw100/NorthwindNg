import { ShipperDetailService } from '../../shared/shipper-detail.service'; 
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shipper-detail',
  templateUrl: './shipper-detail.component.html',
  styles: [
  ]
})

export class ShipperDetailComponent implements OnInit {

  constructor(public service: ShipperDetailService, 
    private toastr: ToastrService) { }

  onSubmit(form: NgForm) {
    if (this.service.formData.shipperId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }
  
  async updateRecord(form: NgForm) {
    (await this.service.putShipperDetail()).subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Updated successfully','Shipper Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  async insertRecord(form: NgForm) {
    (await this.service.postShipperDetail()).subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully','Shipper Detail Register');
        this.service.refreshList();
      },
      err => { console.log(err); }
    )
  }

  ngOnInit() {
    this.resetForm();
  }
  
  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      shipperId: 0,
      companyName: '',
      phone: ''
    }
  }  
}
