import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { MyAnswerComponent } from './my-answer/my-answer.component';
import { AllAnswersComponent } from './all-answers/all-answers.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  { path: '', component: AuthComponent, pathMatch: 'full' },
  { path: 'answers', component: AllAnswersComponent, canActivate: [AuthGuard] },
  { path: 'my', component: MyAnswerComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
