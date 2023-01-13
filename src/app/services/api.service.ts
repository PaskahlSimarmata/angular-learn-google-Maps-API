import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Response } from '../interface/response.interface';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiUrl:string = 'https://randomuser.me/api';
  constructor(private http:HttpClient) { }

  // fetch Users
  getUsers(size:number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/?results=${size}`).pipe(
      map(res => this.processResponse(res))
    );
  }
  // Fetch 1 Users
  getUser(uuid:string): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/?uuid=${uuid}`).pipe(
      map(res => this.processResponse(res))
    );
  }


  private processResponse(response:Response) :Response {
    return{
      info: {...response.info},
      results: response.results.map( (user:any)=>(<User>{
        uuid:user.login.uuid,
        fisrtName: user.name.first,
        lastName: user.name.last,
        email: user.email,
        username:user.login.username,
        gender:user.gender,
        address:`${user.location.street.number}, ${user.location.street.name}, ${user.location.city}; ${user.location.country}`,
        dateOfBirth: user.dob.date,
        phone: user.phone,
        imageUrl:user.picture.medium,
        coordinate:{
          latitude: parseFloat(user.location.coordinates.latitude),
          longitude: parseFloat(user.location.coordinates.longitude)
        }
      }))
    };
  }

}
