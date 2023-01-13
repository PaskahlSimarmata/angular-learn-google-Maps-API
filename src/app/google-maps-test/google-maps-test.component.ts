import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-google-maps-test',
  templateUrl: './google-maps-test.component.html',
  styleUrls: ['./google-maps-test.component.scss']
})
export class GoogleMapsTestComponent implements OnInit{
// display:any;
// center: google.maps.LatLngLiteral = {lat:10,lng:13};
// markerOptions:google.maps.MarkerOptions ={draggable:false}
// markerPositions:google.maps.LatLngLiteral[]=[];
// zoom=4
// polyline
// verticles :google.maps.LatLngLiteral[]=[
//   {lat:10, lng:13},
//   {lat:10, lng:-13}
// ]

verticles! :google.maps.LatLngLiteral

zoom=12
ngOnInit(): void {
  // load google maps
  let loader = new Loader({
    apiKey:'AIzaSyD3yX_6tMw_eIu2RS7hYN8vT0LpVKJDVb4',
  })
  loader.load().then(()=>{
    console.log("loaded map");
    // give location
    const location ={
      lat:35.0000, 
      lng:103.0000
    };
    this.verticles=location
  })

}



// mouse move
// moveMap(event:google.maps.MapMouseEvent){
//   if(event.latLng!=null)
//   this.center = (event.latLng.toJSON())
// }
// add marker
// addMarker(event:google.maps.MapMouseEvent){
//   if(event.latLng!=null)
//   this.markerPositions.push(event.latLng.toJSON())
// }

// mouse move
// moveMap(event:google.maps.MapMouseEvent){
//   if(event.latLng!=null)
//   this.center = (event.latLng.toJSON())
// }

// add marker
// addMarker(event:google.maps.MapMouseEvent){
//   if(event.latLng!=null)
//   this.markerPositions.push(event.latLng.toJSON())
// }

}

