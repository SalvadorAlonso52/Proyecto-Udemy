import { NgModule } from '@angular/core';

import { Routes, RouterModule} from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { PortafolioItemComponent } from './pages/portafolio-item/portafolio-item.component';

// tslint:disable-next-line: variable-name
const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: '', component: PortafolioComponent},
  { path: 'about', component: AboutComponent },
  { path: 'portafolio-item', component: PortafolioItemComponent },
  { path: 'home', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
