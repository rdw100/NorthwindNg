import { Component, OnInit } from '@angular/core';
import { ShipperDetailService } from 'src/app/shared/shipper-detail.service';
import { ShipperDetail } from 'src/app/shared/shipper-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shipper-detail-list',
  templateUrl: './shipper-detail-list.component.html',
  styles: [
  ]
})
export class ShipperDetailListComponent implements OnInit {

  constructor(public service: ShipperDetailService, 
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(sd: ShipperDetail){
    this.service.formData = Object.assign({}, sd);
  }

  onDelete(shipperId: Number) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteShipperDetail(shipperId)
        .subscribe(res => {
          this.service.refreshList();
          this.toastr.warning('Deleted Successfully', 'Shipper Detail Register');
        },
        err => { console.log(err); })
    }
  }
}