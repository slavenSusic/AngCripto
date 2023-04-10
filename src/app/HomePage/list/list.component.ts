
import { Component, OnInit,Pipe, PipeTransform } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { APIServiceService } from 'src/app/Service/apiservice.service';
import { CryptoList } from 'src/Interface/CriptoInterface.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], search: string): any[] {
    if (!items) {
      return [];
    }
    if (!search) {
      return items;
    }
    search = search.toLowerCase();
    return items.filter(item => {
      return item.name.toLowerCase().includes(search);
    });
  }
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
 
  search!:string;


  constructor(private APIService:APIServiceService, 
    
    private router:Router) {}

  tableItems!: CryptoList[];
  
  


  ngOnInit(): void {
    this.getListData()
  }

  getListData(){
    this.APIService.listData().subscribe(data =>{
    //  console.log(data)
      this.tableItems=data
    })

}
}