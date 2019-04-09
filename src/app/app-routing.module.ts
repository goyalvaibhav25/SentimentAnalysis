import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DummyComponent } from 'src/app/dummy/dummy.component';

const routes: Routes = [
  {path : 'dashboard', component: DashboardComponent},
  {path : 'dummy', component : DummyComponent},
  {path: 'abc', component: DummyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
