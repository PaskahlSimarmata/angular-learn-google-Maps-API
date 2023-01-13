import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
import { Coordinate } from 'src/app/interface/coordinate.interface';
import { User } from 'src/app/interface/user.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user:User={} as User;
  mode=true;
  buttonText:'save'|'edit'='edit'
  constructor(private activatedRoute : ActivatedRoute , private userService: ApiService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params : ParamMap)=>{
      console.log('UUID : ',params.get('uuid'));
      
      this.userService.getUser(params.get('uuid')!)
      .subscribe({
        next:(res)=>{
          // console.log(res);
          this.user= res.results[0]
        }
      })
    })
    // this.addPlace()
  }


  changeMode():void{
    this.mode= !this.mode
    console.log(this.mode); 
    this.buttonText=this.buttonText==='edit'? 'save':'edit';
    if(this.mode==true){
      console.log('update successfully');
    }
  } 


  // for googl maps
  coordinate:Coordinate={} as Coordinate
  place!: google.maps.LatLngLiteral
  zoom=4
  center! : google.maps.LatLngLiteral

  addPlace(googleMap:GoogleMap){
    this.activatedRoute.paramMap.subscribe((params : ParamMap)=>{
      // console.log('UUID : ',params.get('uuid'));
  
      this.userService.getUser(params.get('uuid')!)
      .subscribe({
        next:(res)=>{
          // console.log(res);
          this.coordinate= res.results[0].coordinate
          const location = {
            lat : this.coordinate.latitude,
            lng : this.coordinate.longitude
          }
          this.place=location
          const bounds = new google.maps.LatLngBounds();
          const source = new google.maps.LatLng(
            this.coordinate.latitude,
            this.coordinate.longitude
          )
            bounds.extend(source)
            googleMap.fitBounds(bounds)
        }
      })
    })
  }
}
