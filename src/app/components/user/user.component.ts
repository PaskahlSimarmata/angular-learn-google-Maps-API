import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Info } from 'src/app/interface/info.interface';
import { Response } from 'src/app/interface/response.interface';
import { User } from 'src/app/interface/user.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  

  constructor(private usersService: ApiService) { }
  displayedColumns: string[] = ['id', 'image', 'name', 'email', 'gender', 'address', 'phone', 'action'];
  dataSource:any;
  response!: Response
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.usersService.getUsers(100)
    .subscribe({
      next:(res)=>{  
        this.response=res
        console.log(this.response);
      }
    })
  }

}
