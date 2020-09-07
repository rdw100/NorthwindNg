import { ShipperDetail } from './shipper-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ShipperDetailService {
  formData: ShipperDetail;
  readonly rootURL = 'https://localhost:44314/api/';
  list : ShipperDetail[];

  constructor(private http: HttpClient) { }

  postShipperDetail() {
    return this.http.post(this.rootURL + 'shippers', this.formData);
  }

  putShipperDetail() {
    return this.http.put(this.rootURL + 'shippers/' + this.formData.shipperId, this.formData);
  }
  
  deleteShipperDetail(id) {
    return this.http.delete(this.rootURL + 'shippers/' + id);
  }

  async refreshList(){
    await this.http.get(this.rootURL + 'shippers')
    .toPromise()
    .then(res => this.list = res as ShipperDetail[])
    .catch(err => { 
                    console.log ('error');
                  });
  }
}