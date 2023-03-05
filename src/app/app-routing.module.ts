import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { FilterComponent } from './pages/filter/filter.component'

const routes: Routes = [
  {
    path: '',
    title:'Home',
    component: HomeComponent
  },
  {
    path: 'search',
    title:'search',
    component: FilterComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
