import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-paskahl',
  templateUrl: './testing-paskahl.component.html',
  styleUrls: ['./testing-paskahl.component.scss']
})
export class TestingPaskahlComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constanta = 2
  addNumb(number:number){
    this.constanta=number
    console.log(this.constanta);
    
  }
}
