import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserComponent } from './components/user/user.component';
import { GoogleMapsTestComponent } from './google-maps-test/google-maps-test.component';
import { TestingPaskahlComponent } from './testing-paskahl/testing-paskahl.component';

const routes: Routes = [
  {
    path:'users',
    component:UserComponent
  },
  {
    path:'user/:uuid',
    component:UserDetailComponent
  },
  {
    path:'text-maps',
    component:GoogleMapsTestComponent
  },
  {
    path:'paskal',
    component:TestingPaskahlComponent
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo:'users'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }