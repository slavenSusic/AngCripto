import { Component, OnInit } from '@angular/core';
import { APIServiceService } from 'src/app/Service/apiservice.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DetailsInt } from 'src/Interface/DetailsInterface.model';
@Component({
  selector: 'app-coindetail',
  templateUrl: './coindetail.component.html',
  styleUrls: ['./coindetail.component.css']
})
export class CoindetailComponent implements OnInit{
 
image!:string
description!:string

  constructor(private api:APIServiceService, private route:ActivatedRoute) {}
details:any

ngOnInit(): void {
  this.getDetails()
}

getDetails(): void {
  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.api.detailsData(id).subscribe((data) => {
      this.details = data;
      console.log(data);
    });
  }
}


}

    

