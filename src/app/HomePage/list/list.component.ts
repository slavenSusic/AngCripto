
import { Component, OnInit } from '@angular/core';
import { APIServiceService } from 'src/app/Service/apiservice.service';
import { CryptoList } from 'src/Interface/CriptoInterface.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private APIService:APIServiceService) {}

  tableItems!: CryptoList[];


  ngOnInit(): void {
    this.getListData()
  }

  getListData(){
    this.APIService.listData().subscribe(data =>{
     console.log(data)
      this.tableItems=data
    })

}
}