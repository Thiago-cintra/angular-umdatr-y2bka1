import { Component, OnInit } from '@angular/core';
import { Service, services } from '../services';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ServiceListComponent implements OnInit {
  services = services;
  
  listService!: Array<Service>;
  newService: Service = new Service();

  ngOnInit(){
    this.listService = new Array();
  }
}
