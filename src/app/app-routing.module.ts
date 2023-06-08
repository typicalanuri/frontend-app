import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolunteerFormComponent } from './components/volunteer-form/volunteer-form.component';
import { HrViewComponent } from './components/hr-view/hr-view.component';

const routes: Routes = [
  {path: 'volunteer-form', component: VolunteerFormComponent},
  {path: 'hr-view', component: HrViewComponent},
  {path: '**', component: VolunteerFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
